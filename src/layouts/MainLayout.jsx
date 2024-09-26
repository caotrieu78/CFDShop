import { libFunc } from "@/assets/js/main";
import AuthenModal from "@/components/AuthenModal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MainContextProvider } from "@/components/MainContext";
import { MobileMenu } from "@/components/MobileMenu";
import ScrollTop from "@/components/ScrollTop";
import { LOCAL_STORAGE } from "@/constants/localStorage";
import { authService } from "@/services/authServices";
import { setUser } from "@/store/reducers/authReducer";
import { getCart } from "@/store/reducers/cartReducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
	const { pathname } = useLocation();
	const dispatch = useDispatch();
	// Auto scroll to top when change path
	useEffect(() => {
		document.body.scrollIntoView({ behavior: "smooth", block: "start" });
	}, [pathname]);

	// Add main.js script to body when first render content
	useEffect(() => {
		const myTimeout = setTimeout(() => {
			libFunc();
		}, 600);
		return () => clearTimeout(myTimeout);
	}, [pathname]);

	useEffect(() => {
		const getProfile = async () => {
			try {
				const res = await authService.getProfile();
				if (res?.data?.data) {
					dispatch(setUser(res.data.data));
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		const token = localStorage.getItem(LOCAL_STORAGE.token);
		if (!!token) {
			getProfile();
			dispatch(getCart());
		}
	}, []);

	return (
		<MainContextProvider>
			<div className="page-wrapper">
				<Header />
				<Outlet />
				<Footer />
			</div>
			<ScrollTop />
			<MobileMenu />
			<AuthenModal />
		</MainContextProvider>
	);
};

export default MainLayout;
