import ProductCard from "@/components/ProductCard/ProductCard";
import { Skeleton, Space } from "antd";
import React from "react";
import { styled } from "styled-components";

const ProductSkeletonStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding-bottom: 5%;
`

const ProductList = ({ isLoading, isError, products }) => {
	if ((!isLoading && products?.length < 1) || isError)
		return (
			<div className="products mb-3">
				<div className="row justify-content-center">
					There is no products
				</div>
			</div>
		);

	if (isLoading) {
		return (
			<div className="products mb-3">
				<div className="row justify-content-center">
					{new Array(9).fill("").map((_, index) => {
						return (
							<ProductSkeletonStyle key={index} className="col-6 col-md-4 col-lg-4">
								<Skeleton.Image active style={{width: '100%', height: 275}}/>
								<Skeleton.Input />
								<Skeleton.Input block/>
							</ProductSkeletonStyle>
						);
					})}
				</div>
			</div>
		);
	}
	return (
		<div className="products mb-3">
			<div className="row justify-content-center">
				{products.map((product, index) => {
					return (
						<div
							key={product?.id || index}
							className="col-6 col-md-4 col-lg-4"
						>
							<ProductCard product={product} />
						</div>
					);
				})}
				{/* <div className="col-6 col-md-4 col-lg-4">
					<div className="product product-2">
						<figure className="product-media">
							<a href="product-detail.html">
								<img
									src="assets/images/demos/demo-3/products/product-11.jpg"
									alt="Product image"
									className="product-image"
								/>
							</a>
							<div className="product-action-vertical">
								<a
									href="#"
									className="btn-product-icon btn-wishlist btn-expandable"
								>
									<span>add to wishlist</span>
								</a>
							</div>
							<div className="product-action product-action-dark">
								<a
									href="#"
									className="btn-product btn-cart"
									title="Add to cart"
								>
									<span>add to cart</span>
								</a>
							</div>
						</figure>
						<div className="product-body">
							<h3 className="product-title">
								<a href="product-detail.html">
									MacBook Pro 13" Display, i5
								</a>
							</h3>
							<div className="product-price"> $1,199.99 </div>
							<div className="ratings-container">
								<div className="ratings">
									<div
										className="ratings-val"
										style={{
											width: "100%",
										}}
									/>
								</div>
								<span className="ratings-text">
									( 4 Reviews )
								</span>
							</div>
						</div>
					</div>
				</div>*/}
			</div>
		</div>
	);
};

export default ProductList;
