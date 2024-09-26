import { Button } from "@/components/Button";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const CouponContainer = styled.div`
	height: 40px;
	display: flex;
	gap: 10px;

	.checkout-discount {
		flex: 1;
	}
`;

const CouponCheckout = ({ addedCoupon, onAddCoupon, onRemoveCoupon }) => {
	const [renderCoupon, setRenderCoupon] = useState(addedCoupon || "");

	useEffect(() => {
		setRenderCoupon(addedCoupon);
	}, [addedCoupon]);

	const onAdd = () => {
		if (renderCoupon) {
			onAddCoupon(renderCoupon);
		}
	};

	const onRemove = () => {
		if (renderCoupon) {
			onRemoveCoupon?.(onClear);
		}
	};

	const onClear = () => {
		setRenderCoupon("");
	};

	return (
		<CouponContainer>
			<div className="checkout-discount">
				<form>
					<input
						type="text"
						className="form-control"
						id="checkout-discount-input"
						value={renderCoupon || ""}
						onChange={(e) => setRenderCoupon(e.target.value)}
					/>
					<label
						htmlFor="checkout-discount-input"
						className="text-truncate"
						style={{ opacity: renderCoupon ? 0 : 1 }}
					>
						Have a coupon?{" "}
						<span>Click here to enter your code</span>
					</label>
				</form>
			</div>
			{addedCoupon ? (
				<Button variant="outline" onClick={onRemove}>
					Remove
				</Button>
			) : (
				<Button onClick={onAdd}>Add</Button>
			)}
		</CouponContainer>
	);
};

export default CouponCheckout;
