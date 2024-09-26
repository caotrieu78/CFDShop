import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/css/index.scss";
import PrivateRoute from "./components/PrivateRoute";
import { PATHS } from "./constants/pathnames";
import { PageLoading } from "./components/PageLoading";
import ProfileLayout from "@/layouts/ProfileLayout";
import MyOrder from "@/pages/AccountPage/MyOrder";
import MyWishList from "@/pages/AccountPage/MyWishList";
import MyAddress from "@/pages/AccountPage/MyAddress";
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const CheckoutSuccessPage = lazy(() => import("./pages/CheckoutSuccessPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const PaymentMethodsPage = lazy(() => import("./pages/PaymentMethodsPage"));
const PrivatePolicyPage = lazy(() => import("./pages/PrivatePolicyPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ReturnPage = lazy(() => import("./pages/ReturnPage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Page404 = lazy(() => import("./pages/Page404"));
const AccountPage = lazy(() => import("./pages/AccountPage"));

function App() {
	return (
		<Suspense lazy={<PageLoading />}>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path={PATHS.PRODUCTS} element={<ProductsPage />} />
					<Route
						path={PATHS.PRODUCT_DETAIL}
						element={<ProductDetailPage />}
					/>

					<Route path={PATHS.DASHBOARD} element={<DashboardPage />} />
					<Route path={PATHS.FAQ} element={<FAQPage />} />
					<Route
						path={PATHS.PAYMENT_METHOD}
						element={<PaymentMethodsPage />}
					/>
					<Route path={PATHS.RETURN} element={<ReturnPage />} />
					<Route path={PATHS.SHIPPING} element={<ShippingPage />} />

					<Route path={PATHS.BLOG} element={<BlogPage />} />

					<Route path={PATHS.CONTACT} element={<ContactPage />} />
					<Route path={PATHS.ABOUT} element={<AboutPage />} />
					<Route
						path={PATHS.PRIVATE_POLICY}
						element={<PrivatePolicyPage />}
					/>

					<Route element={<PrivateRoute redirectPath={PATHS.HOME} />}>
						<Route path={PATHS.CART} element={<CartPage />} />
						<Route
							path={PATHS.CHECKOUT}
							element={<CheckoutPage />}
						/>
						<Route
							path={PATHS.CHECKOUT_SUCCESS}
							element={<CheckoutSuccessPage />}
						/>
						<Route
							path={PATHS.PROFILE.INDEX}
							element={<ProfileLayout />}
						>
							<Route index element={<AccountPage />} />
							<Route
								path={PATHS.PROFILE.PROFILE_ORDER}
								element={<MyOrder />}
							/>
							<Route
								path={PATHS.PROFILE.PROFILE_WISHLIST}
								element={<MyWishList />}
							/>
							<Route
								path={PATHS.PROFILE.PROFILE_ADDRESS}
								element={<MyAddress />}
							/>
						</Route>
					</Route>
					<Route path="*" element={<Page404 />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
