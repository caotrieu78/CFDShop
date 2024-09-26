import { useDispatch, useSelector } from "react-redux";
import { useMainContext } from "../MainContext";
import { logout } from "@/store/reducers/authReducer";
import { clearCart, updateCart } from "@/store/reducers/cartReducer";
import { message } from "antd";
import { CART_MESSAGE, GENERAL_MESSAGE } from "@/constants/message";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/constants/pathnames";
import useDebounce from "@/hooks/useDebounce";

const useHeader = () => {
	const { openAuthenModal } = useMainContext();

	const navigate = useNavigate();

	const { profile } = useSelector((state) => state.auth);
	const { cartInfo } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	// Header Top Props
	const onLogout = () => {
		dispatch(logout());
		dispatch(clearCart());
	};
	const headerTopProps = {
		profile,
		openAuthenModal,
		onLogout,
	};

	// Header Middle Props
	const [search, setSearch] = useState();
	const debounceSearch = useDebounce(search, 500);

	useEffect(() => {
		if (debounceSearch !== undefined) {
			navigate(PATHS.PRODUCTS + `?search=${debounceSearch}`);
		}
	}, [debounceSearch]);

	const onSearch = (e) => {
		setSearch(e.target?.value || "");
	};

	const onRemoveProduct = async (removeProductId) => {
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
					subTotal: 0,
					total: 0,
					totalProduct: ["string"],
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
	const headerMiddleProps = {
		products: cartInfo.product?.map((product, index) => {
			return {
				...product,
				quantity: cartInfo.quantity?.[index] || "1",
			};
		}),
		total: cartInfo.total,
		totalProduct: Number(cartInfo.totalProduct?.[0]) || 0,
		search,
		onRemoveProduct,
		onSearch,
	};

	return {
		headerTopProps,
		headerMiddleProps,
	};
};

export default useHeader;
