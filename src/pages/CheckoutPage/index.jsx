import Breadcrumb from "@/components/Breadcrumb";
import { PATHS } from "@/constants/pathnames";
import React from "react";
import { Link } from "react-router-dom";
import CouponCheckout from "./CouponCheckout";
import useCheckoutPage from "./useCheckoutPage";
import BillingDetail from "./BillingDetail";
import SummaryCheckout from "./SummaryCheckout";

const CheckoutPage = () => {
	const { couponProps, billingProps, summaryProps } = useCheckoutPage();

	return (
		<main className="main">
			<div
				className="page-header text-center"
				style={{
					backgroundImage: 'url("assets/images/page-header-bg.jpg")',
				}}
			>
				<div className="container">
					<h1 className="page-title">Checkout</h1>
				</div>
			</div>
			<Breadcrumb>
				<Breadcrumb.Item>
					<Link to={PATHS.HOME}>Home</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item>
					<Link to={PATHS.PRODUCTS}>Product</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item isActive>Checkout</Breadcrumb.Item>
			</Breadcrumb>
			<div className="page-content">
				<div className="checkout">
					<div className="container">
						<CouponCheckout {...couponProps} />
						<div className="checkout-form">
							<div className="row">
								<BillingDetail {...billingProps}/>
								<SummaryCheckout {...summaryProps}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default CheckoutPage;
