import { PAYMENT_METHOD, THUNK_STATUS } from "@/constants/general";
import { COUPON, ORDER, SHIPPING } from "@/constants/message";
import { PATHS } from "@/constants/pathnames";
import { orderServices } from "@/services/orderServices";
import { updateCacheCart } from "@/store/reducers/cartReducer";
import { checkout } from "@/store/reducers/orderReducer";
import { message } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCheckoutPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { cartInfo } = useSelector((state) => state.cart);
	const { checkoutStatus } = useSelector((state) => state.order);

	// Coupon Props
	const onAddCoupon = async (coupon) => {
		try {
			const couponRes = await orderServices.getVoucher(coupon);
			const couponInfo = couponRes?.data?.data;

			if (couponInfo) {
				const { subTotal, shipping } = cartInfo || {};
				dispatch(
					updateCacheCart({
						...cartInfo,
						discount: couponInfo.value || 0,
						discountCode: couponInfo.code || "",
						total:
							subTotal -
							(couponInfo.value || 0) +
							(shipping?.price || 0),
					})
				);
				message.success(COUPON.couponSuccess);
			}
		} catch (error) {
			console.log("error", error);
			message.error(COUPON.couponFail);
		}
	};
	const onRemoveCoupon = (callback) => {
		try {
			if (cartInfo.discountCode) {
				const { subTotal, shipping } = cartInfo || {};
				dispatch(
					updateCacheCart({
						...cartInfo,
						discount: 0,
						discountCode: "",
						total: subTotal + (shipping?.price || 0),
					})
				);
				message.success(COUPON.removeSuccesss);
				callback?.();
			}
		} catch (error) {
			console.log("error", error);
			message.error(COUPON.removeFail);
		}
	};
	const couponProps = {
		addedCoupon: cartInfo.discountCode,
		onAddCoupon,
		onRemoveCoupon,
	};

	// Billing Props
	const { profile } = useSelector((state) => state.auth);
	const form = useForm();

	useEffect(() => {
		if (profile?.id) {
			const {
				email,
				firstName,
				phone,
				street,
				province,
				district,
				ward,
				birthday,
			} = profile || {};
			// async set form value with RHF
			form.reset({
				email: email,
				fullName: firstName || "",
				phone: phone,
				street: street,
				province: province,
				district: district,
				ward: ward,
				birthday: birthday
					? dayjs(birthday || "01-01-2000")
							.format("YYYY/MM/DD")
							.replaceAll("/", "-")
					: "",
				note: "",
			});
		}
	}, [profile]);

	const billingProps = {
		profile: profile || {},
		form,
	};

	// Summary Props
	const [currenPaymentMethod, setCurrentPaymentMethod] = useState(
		cartInfo.paymentMethod || PAYMENT_METHOD.cash
	);

	useEffect(() => {
		if (Object.values(PAYMENT_METHOD).includes(cartInfo.paymentMethod)) {
			setCurrentPaymentMethod(cartInfo.paymentMethod);
		}
	}, [cartInfo.paymentMethod]);

	const modProducts = cartInfo.product?.map((product, index) => {
		return {
			...product,
			quantity: cartInfo.quantity?.[index],
		};
	});

	const handleCheckout = async () => {
		const {
			shipping,
			variant,
			product,
			quantity,
			discount,
			discountCode,
			total,
			subTotal,
			totalProduct,
		} = cartInfo || {};
		const { phone, email, fullName, street, note } = form.getValues() || {};
		const productPayload = product.map((product) => {
			return product.id;
		});
		const orderPayload = {
			address: {
				phone: phone || "",
				email: email || "",
				fullName: fullName || "",
				street: street || "",
			},
			shipping,
			variant,
			subTotal,
			total,
			product: productPayload,
			quantity,
			totalProduct,
			discount,
			discountCode,
			paymentMethod: currenPaymentMethod || "",
			note: note || "",
		};

		try {
			if (
				orderPayload?.product?.length > 0 &&
				checkoutStatus !== THUNK_STATUS.pending
			) {
				const res = dispatch(checkout(orderPayload)).unwrap();
				if (res) {
					message.success(ORDER.orderSuccess);
					navigate(PATHS.CHECKOUT_SUCCESS + `?id=${res?.id}`);
				} else {
					message.error(ORDER.orderFail);
				}
			}
		} catch (error) {
			console.log("error", error);
			message.error(ORDER.orderFail);
		}
	};

	const onPlaceOrder = () => {
		if (!!!cartInfo.shipping?.typeShip) {
			message.error(SHIPPING.requireSelect);
		} else if (!!!currenPaymentMethod) {
			message.error(PAYMENT_METHOD.requireSelect);
		} else {
			const checkout = form.handleSubmit(handleCheckout);
			checkout();
		}
	};

	const summaryProps = {
		products: modProducts,
		subTotal: cartInfo.subTotal,
		total: cartInfo.total,
		shipping: cartInfo.shipping,
		paymentMethod: currenPaymentMethod,
		onUpdatePaymentMethod: setCurrentPaymentMethod,
		onPlaceOrder,
	};

	return {
		couponProps,
		billingProps,
		summaryProps,
	};
};

export default useCheckoutPage;
