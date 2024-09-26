import ProductCard from "@/components/ProductCard/ProductCard";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { HOT_TABS } from "./useHome";

const HotProductSection = ({ hotProducts, selectedHotTab, onSelectHotTab }) => {
	const [renderedProducts, setRenderedProducts] = useState([]);

	useEffect(() => {
		setRenderedProducts(hotProducts);
	}, [hotProducts]);

	const onTabChange = (tab) => {
		setRenderedProducts([]);
		setTimeout(() => {
			onSelectHotTab?.(tab);
		}, 300);
	};

	return (
		<div className="container featured" style={{minHeight: 550}}>
			<ul
				className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3"
				role="tablist"
			>
				<li className="nav-item">
					<a
						className={`nav-link ${selectedHotTab === HOT_TABS.featured ? "active" : ""}`}
						id="products-featured-link"
						data-toggle="tab"
						href="#products-featured-tab"
						role="tab"
						aria-controls="products-featured-tab"
						aria-selected="true"
						onClick={() => onTabChange(HOT_TABS.featured)}
					>
						Featured
					</a>
				</li>
				<li className="nav-item">
					<a
						className={`nav-link ${selectedHotTab === HOT_TABS.sale ? "active" : ""}`}
						id="products-sale-link"
						data-toggle="tab"
						href="#products-sale-tab"
						role="tab"
						aria-controls="products-sale-tab"
						aria-selected="false"
						onClick={() => onTabChange(HOT_TABS.sale)}
					>
						On Sale
					</a>
				</li>
				<li className="nav-item">
					<a
						className={`nav-link ${selectedHotTab === HOT_TABS.top ? "active" : ""}`}
						id="products-top-link"
						data-toggle="tab"
						href="#products-top-tab"
						role="tab"
						aria-controls="products-top-tab"
						aria-selected="false"
						onClick={() => onTabChange(HOT_TABS.top)}
					>
						Top Rated
					</a>
				</li>
			</ul>
			<div className="tab-content tab-content-carousel">
				<div
					className={`tab-pane p-0 fade ${
						renderedProducts?.length > 0 ? "show active" : ""
					}`}
					role="tabpanel"
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

export default HotProductSection;
