import Checkbox from "@/components/Checkbox";
import React from "react";

const ProductFilter = ({
	categories,
	isLoading,
	isError,
	activeCategory,
	onCateFilterChange,
}) => {
	const onFilterChange = (id, isChecked) => {
		if (isChecked) {
			onCateFilterChange(id);
		} else {
			onCateFilterChange("");
		}
	};

	return (
		<aside className="col-lg-3 order-lg-first">
			<div className="sidebar sidebar-shop">
				<div className="widget widget-clean">
					<label>Filters:</label>
					<a
						role="button"
						onClick={() => onCateFilterChange("")}
						className="sidebar-filter-clear"
					>
						Clean All
					</a>
				</div>
				<div className="widget widget-collapsible">
					<h3 className="widget-title">
						<a
							data-toggle="collapse"
							href="#widget-1"
							role="button"
							aria-expanded="true"
							aria-controls="widget-1"
						>
							{" "}
							Category{" "}
						</a>
					</h3>
					<div className="collapse show" id="widget-1">
						<div className="widget-body">
							<div className="filter-items filter-items-count">
								{categories?.map((category, index) => {
									return (
										<div
											key={category?.id || index}
											className="filter-item"
										>
											<Checkbox
												id={category?.id || index}
												label={category.name || ""}
												checked={
													activeCategory ===
													category?.id
												}
												onChange={(value) => {
													console.log(
														value.target.checked
													);
													onFilterChange(
														category?.id,
														value.target.checked
													);
												}}
											/>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				{/* <div className="widget widget-collapsible">
					<h3 className="widget-title">
						<a
							data-toggle="collapse"
							href="#widget-2"
							role="button"
							aria-expanded="true"
							aria-controls="widget-5"
						>
							{" "}
							Price{" "}
						</a>
					</h3>
					<div className="collapse show" id="widget-2">
						<div className="widget-body">
							<div className="filter-price">
								<div className="filter-price-text">
									{" "}
									Price Range:{" "}
									<span id="filter-price-range" />
								</div>
								<div id="price-slider" />
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</aside>
	);
};

export default ProductFilter;
