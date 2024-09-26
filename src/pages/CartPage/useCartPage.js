import { SHIPPING_OPTIONS, THUNK_STATUS } from "@/constants/general";
import { CART_MESSAGE, GENERAL_MESSAGE } from "@/constants/message";
import useForceRender from "@/hooks/useForceRender";
import { updateCart } from "@/store/reducers/cartReducer";
import { message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCartPage = () => {
	const dispatch = useDispatch();
	const { cartInfo, updateStatus } = useSelector((state) => state.cart);
	const [currentCartProducts, setCurrentCartProducts] = useState([]);
	const rerender = useForceRender();

	useEffect(() => {
		const { product, quantity } = cartInfo || {};
		if (product && quantity) {
			const modProducts = product.map((item, index) => {
				return {
					...item,
					quantity: quantity[index],
				};
			});
			setCurrentCartProducts(modProducts);
		}
	}, [cartInfo]);

	// Cart Table Props
	const onUpdateQuantity = async (updateValue, updateIndex) => {
		const updateProducts =
			currentCartProducts.map((product, index) => {
				return updateIndex === index
					? {
							...product,
							quantity: updateValue,
					  }
					: { ...product };
			}) || [];

		if (
			cartInfo.id &&
			updateStatus !== THUNK_STATUS.pending &&
			updateProducts.length > 0
		) {
			try {
				let updatePayload = {};
				const newProductPayload = updateProducts?.map((product) => {
					return product.id;
				});
				const newQuantityPayload = updateProducts?.map((product) => {
					return product.quantity;
				});

				updatePayload = {
					...cartInfo,
					product: newProductPayload,
					quantity: newQuantityPayload,
				};
				await dispatch(updateCart(updatePayload)).unwrap();
				setCurrentCartProducts(updateProducts);
			} catch (error) {
				console.log("error", error);
				message.error(GENERAL_MESSAGE.error);
				// rerender();
				throw error
			}
		}
	};

	const onRemoveProductCart = async (removeProductId) => {
		if (removeProductId) {
			let newPayload = {};
			const removeIndex = cartInfo.product?.findIndex(
				(product) => product.id === removeProductId
			);

			if (removeIndex > -1) {
				const newProductPayload = cartInfo.product?.filter(
					(_, index) => index !== removeIndex
				);
				const newQuantityPayload = cartInfo.quantity?.filter(
					(_, index) => index !== removeIndex
				);

				newPayload = {
					...cartInfo,
					product: newProductPayload.map((product) => product.id),
					quantity: newQuantityPayload,
				};
				const res = await dispatch(updateCart(newPayload)).unwrap();
				if (res.id) {
					message.success(CART_MESSAGE.removeSuccesss);
				}
			} else {
				message.error(GENERAL_MESSAGE.error);
			}
		}
	};
	const cartTableProps = {
		products: currentCartProducts || [],
		onUpdateQuantity,
		onRemoveProductCart,
	};

	// Cart Summary Props
	const onUpdateShipping = async (value) => {
		const selectedShipping = SHIPPING_OPTIONS.find(
			(option) => option.value === value
		);
		if (
			cartInfo.id &&
			updateStatus !== THUNK_STATUS.pending &&
			selectedShipping
		) {
			try {
				let updatePayload = {};
				const newProductPayload = cartInfo.product?.map((product) => {
					return product.id;
				});
				updatePayload = {
					...cartInfo,
					product: newProductPayload,
					shipping: {
						typeShip: selectedShipping.value,
						price: selectedShipping.price,
					},
				};
				await dispatch(updateCart(updatePayload)).unwrap();
			} catch (error) {
				console.log("error", error);
				message.error(GENERAL_MESSAGE.error);
			}
		}
	};
	const cartSummaryProps = {
		subTotal: cartInfo.subTotal || 0,
		total: cartInfo.total || 0,
		typeShip: cartInfo.shipping?.typeShip || "",
		onUpdateShipping,
	};

	return {
		cartTableProps,
		cartSummaryProps,
	};
};

export default useCartPage;
