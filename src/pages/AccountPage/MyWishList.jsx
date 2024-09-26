import React from "react";

const MyWishList = () => {
	return (
		<div className="tab-pane fade active show">
			<table className="table table-wishlist table-mobile">
				<thead>
					<tr>
						<th>Product</th>
						<th className="text-center">Price</th>
						<th className="text-center">Stock Status</th>
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
									<a href="#">Beige knitted</a>
								</h3>
							</div>
						</td>
						<td className="price-col text-center">$84.00</td>
						<td className="stock-col text-center">
							<span className="in-stock">In stock</span>
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
									<a href="#">Blue utility</a>
								</h3>
							</div>
						</td>
						<td className="price-col text-center">$76.00</td>
						<td className="stock-col text-center">
							<span className="in-stock">In stock</span>
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
									<a href="#">Orange saddle lock</a>
								</h3>
							</div>
						</td>
						<td className="price-col text-center">$52.00</td>
						<td className="stock-col text-center">
							<span className="out-of-stock">Out of stock</span>
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
	);
};

export default MyWishList;
