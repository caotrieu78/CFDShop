import { useMainContext } from "@/components/MainContext";
import { LOCAL_STORAGE } from "@/constants/localStorage";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectPath = "/" }) => {
	// @ts-ignore
	const { openAuthenModal } = useMainContext();

	const isLogin = localStorage.getItem(LOCAL_STORAGE.token);
	if (!isLogin) {
		openAuthenModal(true);
		return <Navigate to={redirectPath} />;
	}

	return (
		<>
			<Outlet />
		</>
	);
};

export default PrivateRoute;
