import { useMainContext } from "@/components/MainContext";
import { LOCAL_STORAGE } from "@/constants/localStorage";
import EmptyOrder from "@/pages/AccountPage/MyOrder/EmptyOrder";
import ListOrder from "@/pages/AccountPage/MyOrder/ListOrder";
import { authService } from "@/services/authServices";
import { setOrder } from "@/store/reducers/authReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyOrder = () => {
	const dispatch = useDispatch();
	const { setIsLoadingPage } = useMainContext();

	const { listOrder } = useSelector((state) => state.auth);

	const getOrder = async () => {
		try {
			const res = await authService.getOrderMe();
			if (res?.data?.data) {
				dispatch(setOrder(res.data.data));
				setIsLoadingPage(false);
			}
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		const token = localStorage.getItem(LOCAL_STORAGE.token);
		if (!!token) {
			getOrder();
		}
	}, []);

	if (!listOrder) return null;

	return (
		<div className="tab-pane fade active show">
			{listOrder?.orders?.length ?
				<ListOrder listOrder={listOrder?.orders} />
				:
				<EmptyOrder />}
		</div>
	);
};

export default MyOrder;
