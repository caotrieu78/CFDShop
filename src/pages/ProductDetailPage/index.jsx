import React, { useEffect } from "react";
import useProductDetailPage from "./useProductDetailPage";
import { getImageUrl, transformNumberToPercent } from "@/utils/transform";
import { formatCurrency } from "@/utils/format";
import { Empty } from "antd";
import Breadcrumb from "@/components/Breadcrumb";
import { PATHS } from "@/constants/pathnames";
import { Link, useLocation } from "react-router-dom";
import { InputQuantity } from "@/components/InputQuantity";
import Tab from "@/components/Tab/Tab";
import ProductReview from "./ProductReview";
import QuantityInput from "@/components/QuantityInput";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import ShareLink from "@/components/ShareLink/ShareLink";
import { libFunc } from "@/assets/js/main";
import ViewImageZoom from "@/components/ViewImageZoom/ViewImageZoom";

const ProductDetailPage = () => {
	const { productDetailProps } = useProductDetailPage();
	const {
		data: detailData, // gán name khác
		onAddToCard,
		formDetailData,
		reviews,
	} = productDetailProps || {};
	const {
		name,
		rating,
		price,
		description,
		images,
		category,
		stock,
		color,
		shippingReturn,
		id,
	} = detailData || {};

	const pathUrl = window.location.href;

	return (
		<main className="main">
			<nav
				aria-label="breadcrumb"
				className="breadcrumb-nav border-0 mb-0"
			>
				<div className="container d-flex align-items-center">
					<Breadcrumb>
						<Breadcrumb.Item>
							<Link to={PATHS.HOME}>Home</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>
							<Link to={PATHS.PRODUCTS}>Product</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item isActive>
							{detailData?.name}
						</Breadcrumb.Item>
					</Breadcrumb>
				</div>
			</nav>
			<div className="page-content">
				<div className="container">
					<div className="product-details-top">
						<div className="row">
							<div className="col-md-6">
								<ViewImageZoom images={images ?? []} />
							</div>
							<div className="col-md-6">
								<div className="product-details">
									<h1 className="product-title">{name}</h1>
									<div className="ratings-container">
										<div className="ratings">
											<div
												className="ratings-val"
												style={{
													width: `${transformNumberToPercent(
														rating
													)}%`,
												}}
											/>
										</div>
										<a
											className="ratings-text"
											href="#product-review-link"
											id="review-link"
										>
											( {reviews?.length} Reviews )
										</a>
									</div>
									<div className="product-price">
										{" "}
										${formatCurrency(price)}
									</div>
									<div
										className="product-content"
										dangerouslySetInnerHTML={{
											__html: description,
										}}
									/>

									<div className="details-filter-row details-row-size">
										<label>Color:</label>
										<div className="product-nav product-nav-dots">
											{color?.map((cr, index) => (
												<div
													key={index}
													onClick={() =>
														formDetailData.setValue(
															"color",
															cr
														)
													}
													className="product-nav-item active"
													style={{
														background: `${cr}`,
													}}
												>
													<span className="sr-only">
														Color name
													</span>
												</div>
											))}
										</div>
									</div>
									<div className="details-filter-row details-row-size">
										<label htmlFor="qty">Qty:</label>
										<div className="product-details-quantity">
											<QuantityInput
												max={stock}
												value={formDetailData.watch(
													"quantity"
												)}
												onChange={(value) =>
													formDetailData.setValue(
														"quantity",
														value
													)
												}
											/>
										</div>
									</div>
									<div className="product-details-action">
										<a
											href="#"
											className="btn-product btn-cart"
											onClick={onAddToCard}
										>
											<span>add to cart</span>
										</a>
										<div className="details-action-wrapper">
											<a
												href="#"
												className="btn-product btn-wishlist"
												title="Wishlist"
											>
												<span>Add to Wishlist</span>
											</a>
										</div>
									</div>
									<div className="product-details-footer">
										<div className="product-cat">
											<span>Category:</span>
											<a href="#">{category?.name}</a>
										</div>
										<div
											style={{ gap: "0 5px" }}
											className="social-icons social-icons-sm"
										>
											<span className="social-label">
												Share:
											</span>
											<ShareLink
												title={"Facebook"}
												path={pathUrl}
											>
												<i className="icon-facebook-f" />
											</ShareLink>
											<ShareLink
												type="twitter"
												title={"Twitter"}
												path={pathUrl}
											>
												<i className="icon-twitter" />
											</ShareLink>
											<ShareLink
												type="instagram"
												title={"Instagram"}
												path={pathUrl}
											>
												<i className="icon-instagram" />
											</ShareLink>
											<ShareLink
												type="pinterest"
												title={"Pinterest"}
												path={pathUrl}
											>
												<i className="icon-pinterest" />
											</ShareLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Tab>
						<Tab.Header>
							<Tab.HeaderItem>Description</Tab.HeaderItem>
							<Tab.HeaderItem>
								Shipping &amp; Returns
							</Tab.HeaderItem>
							<Tab.HeaderItem>
								Reviews ({reviews?.length})
							</Tab.HeaderItem>
						</Tab.Header>
						<Tab.Content>
							<Tab.ContentItem>
								<div
									className="product-desc-content"
									dangerouslySetInnerHTML={{
										__html: description,
									}}
								/>
							</Tab.ContentItem>
							<Tab.ContentItem>
								<div
									className="product-desc-content"
									dangerouslySetInnerHTML={{
										__html: shippingReturn,
									}}
								/>
							</Tab.ContentItem>
							<Tab.ContentItem>
								<ProductReview reviews={reviews} />
							</Tab.ContentItem>
						</Tab.Content>
					</Tab>
				</div>
			</div>
		</main>
	);
};

export default ProductDetailPage;
