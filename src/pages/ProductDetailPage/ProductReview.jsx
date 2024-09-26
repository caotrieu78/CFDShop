import useQuery from "@/hooks/useQuery";
import { orderServices } from "@/services/orderServices";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { transformNumberToPercent } from "@/utils/transform";

const ProductReview = ({ reviews }) => {
	console.log(reviews);
	return (
		<React.Fragment>
			{!!!reviews?.length && <p>Sản phẩm chưa có review!</p>}
			{!!reviews?.length &&
				reviews?.map((review, index) => (
					<ProductReviewItem key={index} {...review} />
				))}
		</React.Fragment>
	);
};

const ProductReviewItem = ({ name, rate, createdAt, title, description }) => {
	return (
		<div className="review">
			<div className="row no-gutters">
				<div className="col-auto">
					<h4>
						<a href="#">{name}</a>
					</h4>
					<div className="ratings-container">
						<div className="ratings">
							<div
								className="ratings-val"
								style={{
									width: `${transformNumberToPercent(rate)}%`,
								}}
							/>
						</div>
					</div>
					<span className="review-date">
						{dayjs(createdAt).format("DD/MM/YYYY HH:mm")}
					</span>
				</div>
				<div className="col">
					<h4>{title}</h4>
					<div className="review-content">
						<p>{description}</p>
					</div>
					<div className="review-action">
						<a href="#">
							<i className="icon-thumbs-up" />
							Helpful (2){" "}
						</a>
						<a href="#">
							<i className="icon-thumbs-down" />
							Unhelpful (0){" "}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductReview;
