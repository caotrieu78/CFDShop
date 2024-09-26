import { useDispatch } from "react-redux";
import { useMainContext } from "../MainContext";
import { authActions, login } from "@/store/reducers/authReducer";
import { unwrapResult } from "@reduxjs/toolkit";
import { message } from "antd";
import { authService } from "@/services/authServices";

const useAuthenModal = () => {
	const dispatch = useDispatch();
	const { isAuthenModalOpen, closeAuthenModal, authenForm, setAuthenForm } =
		useMainContext();

	const onChangeTab = (tab) => {
		setAuthenForm(tab);
	};

	const onClose = () => {
		closeAuthenModal();
	};

	const onLogin = async (payload, isMessage = true) => {
		if (payload?.email) {
			try {
				const res = await dispatch(login(payload));
				const profileData = unwrapResult(res);
				if (profileData?.id) {
					onClose();
					isMessage &&
						message.success(
							`Welcome back ${profileData?.firstName || ""}! `
						);
				}
			} catch (error) {
				if (isMessage) {
					message.error("Something wrong, please try again!");
				} else {
					throw error;
				}
			}
		}
	};

	const onRegister = async (payload) => {
		if (payload) {
			try {
				const res = await authService.register(payload);
				if (res?.data?.data?.id) {
					onLogin(payload, false);
					message.success("Register success, welcome!");
				}
			} catch (error) {
				console.log("error", error);
				message.error("Register failed, please try again");
			}
		}
	};

	return {
		isOpen: isAuthenModalOpen,
		activeTab: authenForm,
		onChangeTab,
		onClose,
		onLogin,
		onRegister,
	};
};

export default useAuthenModal;
