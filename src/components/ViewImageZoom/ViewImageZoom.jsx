import { getImageUrl } from "@/utils/transform";
import { Empty } from "antd";
import React, { useEffect } from "react";
import { cn } from "@/utils/cn";
import { libFunc } from "@/assets/js/main";

const ViewImageZoom = ({ images }) => {
	useEffect(() => {
		if (!!images?.length) libFunc();
	}, [JSON.stringify(images)]);

	return (
		<div className="product-gallery product-gallery-vertical">
			<div className="row">
				<figure className="product-main-image">
					{!!images.length && (
						<img
							id="product-zoom"
							src={getImageUrl(images[0])}
							data-zoom-image={getImageUrl(images[0])}
							alt="product image"
						/>
					)}
					{!!!images.length && <Empty />}
					<div
						id="btn-product-gallery"
						className="btn-product-gallery"
					>
						<i className="icon-arrows" />
					</div>
				</figure>
				<div
					id="product-zoom-gallery"
					className="product-image-gallery"
				>
					{!!images.length &&
						images.map((img, index) => (
							<a
								key={index}
								className={cn("product-gallery-item", {
									active: index == 0,
								})}
								href="#"
								data-image={getImageUrl(img)}
								data-zoom-image={getImageUrl(img)}
							>
								<img
									src={getImageUrl(img)}
									alt="Dark yellow lace"
								/>
							</a>
						))}
				</div>
			</div>
		</div>
	);
};

export default ViewImageZoom;
