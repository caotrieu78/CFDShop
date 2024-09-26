import { PATHS } from "@/constants/pathnames";
import { formatCurrency } from "@/utils/format";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button";
import { Modal } from "antd";
import useDebounce from "@/hooks/useDebounce";

const HeaderMiddle = ({
	products,
	total,
	totalProduct,
	search,
	onRemoveProduct,
	onSearch,
}) => {
	const { confirm } = Modal;
	const onRemoveProductClick = (product) => {
		confirm({
			title: "Do you want remove this item from cart?",
			content: (
				<>
					<p>{`${product?.name || ""}`}</p>
					<p>{`${product?.quantity} x $${product?.price}`}</p>
				</>
			),
			onOk() {
				onRemoveProduct?.(product?.id);
			},
			onCancel() {
				console.log("Cancel");
			},
		});
	};

	return (
		<div className="header-middle sticky-header">
			<div className="container">
				<div className="header-left">
					<button className="mobile-menu-toggler">
						<span className="sr-only">Toggle mobile menu</span>
						<i className="icon-bars" />
					</button>
					<Link to={PATHS.HOME} className="logo">
						<img
							src="/assets/images/logo.svg"
							alt="Molla Logo"
							width={160}
						/>
					</Link>
				</div>
				<nav className="main-nav">
					<ul className="menu">
						<li>
							<NavLink end to={PATHS.HOME}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to={PATHS.ABOUT}>About Us</NavLink>
						</li>
						<li>
							<NavLink to={PATHS.PRODUCTS}>Product</NavLink>
						</li>
						<li>
							<NavLink to={PATHS.BLOG}>Blog</NavLink>
						</li>
						<li>
							<NavLink to={PATHS.CONTACT}>Contact Us</NavLink>
						</li>
					</ul>
				</nav>
				<div className="header-right">
					<div className="header-search">
						<a
							href="#"
							className="search-toggle"
							role="button"
							title="Search"
						>
							<i className="icon-search" />
						</a>
						<form action="#" method="get">
							<div className="header-search-wrapper">
								<label htmlFor="q" className="sr-only">
									Search
								</label>
								<input
									type="search"
									className="form-control"
									name="q"
									id="q"
									placeholder="Search in..."
									value={search}
									onChange={onSearch}
								/>
							</div>
						</form>
					</div>
					<div className="dropdown cart-dropdown">
						<a
							className="dropdown-toggle"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							data-display="static"
						>
							<i className="icon-shopping-cart" />
							{!!totalProduct && (
								<span className="cart-count">
									{totalProduct}
								</span>
							)}
						</a>
						<div className="dropdown-menu dropdown-menu-right">
							<div className="dropdown-cart-products">
								{products?.map((product, index) => {
									const { id, name, slug, quantity, price } =
										product || {};
									return (
										<div
											key={id || index}
											className="product"
										>
											<div className="product-cart-details">
												<h4 className="product-title">
													<Link
														to={
															PATHS.PRODUCTS +
															`/${slug}`
														}
													>
														{name}
													</Link>
												</h4>
												<span className="cart-product-info">
													<span className="cart-product-qty">
														{quantity}
													</span>{" "}
													x ${formatCurrency(price)}{" "}
												</span>
											</div>
											<figure className="product-image-container">
												<a
													href="product-detail.html"
													className="product-image"
												>
													<img
														src="/assets/images/products/cart/product-1.jpg"
														alt="product"
													/>
												</a>
											</figure>
											<a
												role="button"
												className="btn-remove"
												title="Remove Product"
												onClick={() =>
													onRemoveProductClick(
														product
													)
												}
											>
												<i className="icon-close" />
											</a>
										</div>
									);
								})}
								{/* <div className="product">
									<div className="product-cart-details">
										<h4 className="product-title">
											<a href="product-detail.html">
												Beige knitted
											</a>
										</h4>
										<span className="cart-product-info">
											<span className="cart-product-qty">
												1
											</span>{" "}
											x $84.00{" "}
										</span>
									</div>
									<figure className="product-image-container">
										<a
											href="product-detail.html"
											className="product-image"
										>
											<img
												src="/assets/images/products/cart/product-1.jpg"
												alt="product"
											/>
										</a>
									</figure>
									<a
										href="#"
										className="btn-remove"
										title="Remove Product"
									>
										<i className="icon-close" />
									</a>
								</div>
								<div className="product">
									<div className="product-cart-details">
										<h4 className="product-title">
											<a href="product-detail.html">
												Blue utility
											</a>
										</h4>
										<span className="cart-product-info">
											<span className="cart-product-qty">
												1
											</span>{" "}
											x $76.00{" "}
										</span>
									</div>
									<figure className="product-image-container">
										<a
											href="product-detail.html"
											className="product-image"
										>
											<img
												src="/assets/images/products/cart/product-2.jpg"
												alt="product"
											/>
										</a>
									</figure>
									<a
										href="#"
										className="btn-remove"
										title="Remove Product"
									>
										<i className="icon-close" />
									</a>
								</div> */}
							</div>
							<div className="dropdown-cart-total">
								<span>Total</span>
								<span className="cart-total-price">
									${formatCurrency(total)}
								</span>
							</div>
							<div className="dropdown-cart-action">
								{products?.length > 0 ? (
									<>
										<Button link={PATHS.CART}>
											View Cart
										</Button>
										<Button
											link={PATHS.CHECKOUT}
											variant="outline"
										>
											<span>Checkout</span>
											<i className="icon-long-arrow-right" />
										</Button>
									</>
								) : (
									<a>There is no product in cart</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMiddle;
