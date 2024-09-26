import ProductCard from "@/components/ProductCard/ProductCard";
import React, { useEffect, useState } from "react";
import OwlCarousel from 'react-owl-carousel'

const FeaturedSection = ({
	categories,
	featureProducts,
	selectedCateSlug,
	onSelectCateSlug,
}) => {
	const [renderedProducts, setRenderedProducts] = useState([])
	
	useEffect(() => {
		setRenderedProducts(featureProducts)
	}, [featureProducts])

	const onTabChange = (slug) => {
		if (slug !== selectedCateSlug) {
			setRenderedProducts([]);
			setTimeout(() => {
				onSelectCateSlug?.(slug)
			}, 300);
		}
	}

	return (
		<div className="container top" style={{minHeight: 550}}>
			<div className="heading heading-flex mb-3">
				<div className="heading-left">
					<h2 className="title">Featured Products</h2>
				</div>
				<div className="heading-right">
					<ul
						className="nav nav-pills nav-border-anim justify-content-center"
						role="tablist"
					>
						{categories?.length > 0 &&
							categories.map((category, index) => {
								const { name, slug } = category || {};
								return (
									<li
										key={slug || index}
										className="nav-item"
									>
										<a
											className={`nav-link ${
												selectedCateSlug === slug
													? "active"
													: ""
											}`}
											id={`#top-${slug}-link`}
											data-toggle="tab"
											href={`#top-${slug}-tab`}
											role="tab"
											aria-controls={`#top-${slug}-tab`}
											aria-selected={
												selectedCateSlug === slug
													? "true"
													: "false"
											}
											onClick={() =>
												onTabChange(slug)
											}
										>
											{name}
										</a>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
			<div className="tab-content tab-content-carousel just-action-icons-sm">
				<div
					className={`tab-pane p-0 fade ${
						renderedProducts?.length > 0 ? "show active" : ""
					}`}
					role="tabpanel"
					style={{ minHeight: 423 }}
				>
					{renderedProducts?.length > 0 && (
						<OwlCarousel
							className="owl-full carousel-equal-height carousel-with-shadow"
							nav
							margin={20}
							responsive={{
								0: {
									items: 2,
								},
								600: {
									items: 2,
								},
								992: {
									items: 3,
								},
								1200: {
									items: 4,
								},
							}}
						>
							{renderedProducts?.map((product, index) => {
								return (
									<ProductCard
										key={product?.id || index}
										product={product}
									/>
								);
							})}
						</OwlCarousel>
					)}
				</div>
			</div>
		</div>
	);
};

export default FeaturedSection;
