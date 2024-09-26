import useQuery from "@/hooks/useQuery";
import { productService } from "@/services/productServices";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useMemo } from "react";
import { SORT_OPTIONS, THUNK_STATUS } from "@/constants/general";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useMainContext } from "@/components/MainContext";
import { checkAuthen } from "@/utils/checkAuthen";
import { message } from "antd";
import { CART_MESSAGE, GENERAL_MESSAGE } from "@/constants/message";
import { updateCart } from "@/store/reducers/cartReducer";
import { orderServices } from "@/services/orderServices";

const useProductDetailPage = () => {
	// Initial Hooks
	const { slug } = useParams();
	const { openAuthenModal } = useMainContext();
	const { cartInfo, updateStatus } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	// Fetching API
	const {
		data: productDetailData,
		loading: productDetailLoading,
		error: productDetailError,
	} = useQuery(() => productService.getProductDetail(slug), [slug]);

	const { data: productDetailReviews, refetch: refetchReviews } = useQuery(
		orderServices.getReviewFollowProduct
	);

	const productDetailForm = useForm({
		defaultValues: {
			quantity: "1",
		},
	});

	const onAddToCard = async () => {
		const isLogin = checkAuthen();
		const id = productDetailData?.id;
		if (!isLogin) {
			openAuthenModal();
		} else if (id && updateStatus !== THUNK_STATUS.pending) {
			try {
				let addPayload = {};
				const newQuantity = productDetailForm.getValues("quantity");
				const newColor = productDetailForm.getValues("color");
				if (cartInfo.id) {
					const matchIndex = cartInfo.product?.findIndex(
						(product) => product.id === id
					);
					const newProductPayload = cartInfo.product?.map(
						(product) => {
							return product.id;
						}
					);
					const newQuantityPayload = [...cartInfo.quantity];
					const newColorPayload = [...(cartInfo?.color ?? [])];
					if (matchIndex > -1) {
						newQuantityPayload[matchIndex] = (
							Number(newQuantityPayload[matchIndex]) +
							Number(newQuantity)
						).toString();
						newColorPayload[matchIndex] = newColor;
					} else {
						newProductPayload.push(id);
						newQuantityPayload.push(newQuantity);
						newColorPayload.push(newColor);
					}

					addPayload = {
						...cartInfo,
						product: newProductPayload,
						quantity: newQuantityPayload,
						color: newColorPayload,
					};
				} else {
					addPayload = {
						product: [id],
						quantity: [newQuantity],
						color: [newColor],
						subTotal: 0,
						total: 0,
						totalProduct: ["string"],
						discount: 0,
						paymentMethod: "string",
					};
				}
				const res = await dispatch(updateCart(addPayload)).unwrap();
				if (res.id) {
					message.success(CART_MESSAGE.atcSuccesss);
				}
			} catch (error) {
				console.log("error", error);
				message.error(GENERAL_MESSAGE.error);
			}
		}
	};

	useEffect(() => {
		if (productDetailData?.id) {
			refetchReviews?.(productDetailData?.id);
		}
	}, [productDetailData]);

	const productDetailProps = {
		data: productDetailData,
		reviews: productDetailReviews,
		loading: productDetailLoading,
		err: productDetailError,
		formDetailData: productDetailForm,
		onAddToCard,
	};

	return {
		productDetailProps,
	};
};

export default useProductDetailPage;
