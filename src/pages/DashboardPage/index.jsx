import React from "react";

const DashboardPage = () => {
	return (
		<main className="main">
			<div
				className="page-header text-center"
				style={{
					backgroundImage: 'url("assets/images/page-header-bg.jpg")',
				}}
			>
				<div className="container">
					<h1 className="page-title">My Account</h1>
				</div>
			</div>
			<nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
				<div className="container">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="index.html">Home</a>
						</li>
						<li
							className="breadcrumb-item active"
							aria-current="page"
						>
							My Account
						</li>
					</ol>
				</div>
			</nav>
			<div className="page-content">
				<div className="dashboard">
					<div className="container">
						<div className="row">
							<aside className="col-md-4 col-lg-3">
								<ul
									className="nav nav-dashboard flex-column mb-3 mb-md-0"
									role="tablist"
								>
									<li className="nav-item">
										<a
											className="nav-link active"
											id="tab-account-link"
											data-toggle="tab"
											href="#tab-account"
											role="tab"
											aria-controls="tab-account"
											aria-selected="false"
										>
											Account Details
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											id="tab-orders-link"
											data-toggle="tab"
											href="#tab-orders"
											role="tab"
											aria-controls="tab-orders"
											aria-selected="false"
										>
											Orders
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											id="tab-address-link"
											data-toggle="tab"
											href="#tab-address"
											role="tab"
											aria-controls="tab-address"
											aria-selected="false"
										>
											Adresses
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											id="tab-wishlist-link"
											data-toggle="tab"
											href="#tab-wishlist"
											role="tab"
											aria-controls="tab-wishlist"
											aria-selected="false"
										>
											Wishlist
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Sign Out
										</a>
									</li>
								</ul>
							</aside>
							<div className="col-md-8 col-lg-9">
								<div className="tab-content">
									<div
										className="tab-pane fade show active"
										id="tab-account"
										role="tabpanel"
										aria-labelledby="tab-account-link"
									>
										<form
											action="#"
											className="account-form"
										>
											<div className="row">
												<div className="col-sm-6">
													<label>Full Name *</label>
													<input
														type="text"
														className="form-control"
														defaultValue="Tran"
														required
													/>
												</div>
												<div className="col-sm-6">
													<label>
														Email address *
													</label>
													<input
														type="email"
														className="form-control"
														defaultValue="trannghia@gmail.com"
														disabled
														required
													/>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-6">
													<label>
														Phone number *
													</label>
													<input
														type="text"
														className="form-control input-error"
														required
													/>
													<p className="form-error">
														Please fill in this
														field
													</p>
												</div>
												<div className="col-sm-6">
													<label>Ngày sinh *</label>
													<input
														type="date"
														className="form-control"
														required
													/>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-4">
													<label>
														Province/City *
													</label>
													<div className="select-custom">
														<select
															className="form-control form-select"
															id="city"
															aria-label="Default select example"
														>
															<option selected />
														</select>
													</div>
												</div>
												<div className="col-sm-4">
													<label>
														District/Town *
													</label>
													<div className="select-custom">
														<select
															className="form-control form-select"
															id="district"
														>
															<option selected />
														</select>
													</div>
												</div>
												<div className="col-sm-4">
													<label>Ward *</label>
													<div className="select-custom">
														<select
															className="form-control form-select"
															id="ward"
														>
															<option selected />
														</select>
													</div>
												</div>
											</div>
											<label>Street address *</label>
											<input
												type="email"
												className="form-control"
												defaultValue="30 Ba Thang Hai St."
												required
											/>
											<label>
												Current password (leave blank to
												leave unchanged)
											</label>
											<input
												type="password"
												className="form-control"
											/>
											<label>
												New password (leave blank to
												leave unchanged)
											</label>
											<input
												type="password"
												className="form-control"
											/>
											<label>Confirm new password</label>
											<input
												type="password"
												className="form-control mb-2"
											/>
											<button
												type="submit"
												className="btn btn-outline-primary-2"
											>
												<span>SAVE CHANGES</span>
												<i className="icon-long-arrow-right" />
											</button>
										</form>
									</div>
									<div
										className="tab-pane fade"
										id="tab-orders"
										role="tabpanel"
										aria-labelledby="tab-orders-link"
									>
										<p>No order has been made yet.</p>
										<a
											href="category.html"
											className="btn btn-outline-primary-2"
										>
											<span>GO SHOP</span>
											<i className="icon-long-arrow-right" />
										</a>
										<br />
										<br />
										<table className="table table-cart table-mobile">
											<thead>
												<tr>
													<th>Product</th>
													<th className="text-center">
														Price
													</th>
													<th className="text-center">
														Quantity
													</th>
													<th className="text-center">
														Total
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="product-col">
														<div className="product">
															<figure className="product-media">
																<a href="#">
																	<img
																		src="/assets/images/demos/demo-3/products/product-3.jpg"
																		alt="Product image"
																	/>
																</a>
															</figure>
															<h3 className="product-title">
																<a href="#">
																	Beige
																	knitted
																</a>
															</h3>
														</div>
													</td>
													<td className="price-col text-center">
														$84.00
													</td>
													<td className="quantity-col text-center">
														1{" "}
													</td>
													<td className="total-col text-center">
														$84.00
													</td>
												</tr>
												<tr>
													<td className="product-col">
														<div className="product">
															<figure className="product-media">
																<a href="#">
																	<img
																		src="/assets/images/demos/demo-3/products/product-2.jpg"
																		alt="Product image"
																	/>
																</a>
															</figure>
															<h3 className="product-title">
																<a href="#">
																	Blue utility
																</a>
															</h3>
														</div>
													</td>
													<td className="price-col text-center">
														$76.00
													</td>
													<td className="quantity-col text-center">
														1
													</td>
													<td className="total-col text-center">
														$76.00{" "}
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div
										className="tab-pane fade"
										id="tab-address"
										role="tabpanel"
										aria-labelledby="tab-address-link"
									>
										<p>
											The following addresses will be used
											on the checkout page by default.
										</p>
										<div className="row">
											<div className="col-lg-6">
												<div className="card card-dashboard">
													<div className="card-body">
														<h3 className="card-title">
															Billing Address
														</h3>
														<p>
															<strong>
																Fullname:
															</strong>{" "}
															Tran Nghia <br />
															<strong>
																Email:
															</strong>{" "}
															trannghia@gmail.com{" "}
															<br />
															<strong>
																Phone number:
															</strong>{" "}
															098 9596 912 <br />
															<br />
															<a href="#">
																Edit{" "}
																<i className="icon-edit" />
															</a>
														</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="card card-dashboard">
													<div className="card-body">
														<h3 className="card-title">
															Shipping Address
														</h3>
														<p>
															Cecilia Chapman
															711-2880 Nulla St.
															Mankato Mississippi{" "}
															<br />
															<br />
															<a href="#">
																Edit{" "}
																<i className="icon-edit" />
															</a>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="tab-wishlist"
										role="tabpanel"
										aria-labelledby="tab-wishlist-link"
									>
										<table className="table table-wishlist table-mobile">
											<thead>
												<tr>
													<th>Product</th>
													<th className="text-center">
														Price
													</th>
													<th className="text-center">
														Stock Status
													</th>
													<th />
													<th />
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="product-col">
														<div className="product">
															<figure className="product-media">
																<a href="#">
																	<img
																		src="/assets/images/demos/demo-3/products/product-4.jpg"
																		alt="Product image"
																	/>
																</a>
															</figure>
															<h3 className="product-title">
																<a href="#">
																	Beige
																	knitted
																</a>
															</h3>
														</div>
													</td>
													<td className="price-col text-center">
														$84.00
													</td>
													<td className="stock-col text-center">
														<span className="in-stock">
															In stock
														</span>
													</td>
													<td className="action-col">
														<button className="btn btn-block btn-outline-primary-2">
															<i className="icon-cart-plus" />
															Add to Cart{" "}
														</button>
													</td>
													<td className="remove-col">
														<button className="btn-remove">
															<i className="icon-close" />
														</button>
													</td>
												</tr>
												<tr>
													<td className="product-col">
														<div className="product">
															<figure className="product-media">
																<a href="#">
																	<img
																		src="/assets/images/demos/demo-3/products/product-5.jpg"
																		alt="Product image"
																	/>
																</a>
															</figure>
															<h3 className="product-title">
																<a href="#">
																	Blue utility
																</a>
															</h3>
														</div>
													</td>
													<td className="price-col text-center">
														$76.00
													</td>
													<td className="stock-col text-center">
														<span className="in-stock">
															In stock
														</span>
													</td>
													<td className="action-col">
														<button className="btn btn-block btn-outline-primary-2">
															<i className="icon-cart-plus" />
															Add to Cart{" "}
														</button>
													</td>
													<td className="remove-col">
														<button className="btn-remove">
															<i className="icon-close" />
														</button>
													</td>
												</tr>
												<tr>
													<td className="product-col">
														<div className="product">
															<figure className="product-media">
																<a href="#">
																	<img
																		src="/assets/images/demos/demo-3/products/product-6.jpg"
																		alt="Product image"
																	/>
																</a>
															</figure>
															<h3 className="product-title">
																<a href="#">
																	Orange
																	saddle lock
																</a>
															</h3>
														</div>
													</td>
													<td className="price-col text-center">
														$52.00
													</td>
													<td className="stock-col text-center">
														<span className="out-of-stock">
															Out of stock
														</span>
													</td>
													<td className="action-col">
														<button className="btn btn-block btn-outline-primary-2 disabled">
															Out of Stock
														</button>
													</td>
													<td className="remove-col">
														<button className="btn-remove">
															<i className="icon-close" />
														</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DashboardPage;
