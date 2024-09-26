import Breadcrumb from "@/components/Breadcrumb";
import { PATHS } from "@/constants/pathnames";
import React from "react";
import { Link } from "react-router-dom";
import CartTable from "./CartTable";
import CartSummary from "./CartSummary";
import { Button } from "@/components/Button";
import useCartPage from "./useCartPage";

const CartPage = () => {
	const { cartTableProps, cartSummaryProps } = useCartPage();


	return (
		<main className="main">
			<div
				className="page-header text-center"
				style={{
					backgroundImage: 'url("assets/images/page-header-bg.jpg")',
				}}
			>
				<div className="container">
					<h1 className="page-title">Shopping Cart</h1>
				</div>
			</div>
			<Breadcrumb>
				<Breadcrumb.Item>
					<Link to={PATHS.HOME}>Home</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item>
					<Link to={PATHS.PRODUCTS}>Product</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item isActive>Shopping Cart</Breadcrumb.Item>
			</Breadcrumb>
			<div className="page-content">
				<div className="cart">
					<div className="container">
						<div className="row">
							<div className="col-lg-9">
								<CartTable {...cartTableProps}/>
								{/* <div className="cart-bottom">
									<div className="cart-discount">
										<form action="#">
											<div className="input-group">
												<input
													type="text"
													className="form-control input-error"
													required
													placeholder="Coupon code"
												/>
												<div className="input-group-append">
													<button
														className="btn btn-outline-primary-2"
														type="submit"
													>
														<i className="icon-long-arrow-right" />
													</button>
												</div>
											</div>
											<p className="form-error">
												Please fill in this field
											</p>
										</form>
									</div>
									<Button variant="outline-black">
										<span>UPDATE CART</span>
										<i className="icon-refresh" />
									</Button>
								</div> */}
							</div>
							<aside className="col-lg-3">
								<CartSummary {...cartSummaryProps}/>
								<Button
									link={PATHS.PRODUCTS}
									variant="outline-black"
									className="btn-block mb-3"
								>
									<span>CONTINUE SHOPPING</span>
									<i className="icon-refresh" />
								</Button>
							</aside>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default CartPage;
