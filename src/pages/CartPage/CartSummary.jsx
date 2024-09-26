import { Button } from "@/components/Button";
import Radio from "@/components/Radio";
import { SHIPPING_OPTIONS } from "@/constants/general";
import { SHIPPING } from "@/constants/message";
import { PATHS } from "@/constants/pathnames";
import { formatCurrency } from "@/utils/format";
import { message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CartSummary = ({ subTotal, total, typeShip, onUpdateShipping }) => {
	const navigate = useNavigate();
	const onProceedCheckout = () => {
		if (!!!typeShip) {
			message.error(SHIPPING.requireSelect);
		} else {
			navigate(PATHS.CHECKOUT);
		}
	};

	return (
		<div className="summary summary-cart">
			<h3 className="summary-title">Cart Total</h3>
			<table className="table table-summary">
				<tbody>
					<tr className="summary-subtotal">
						<td>Subtotal:</td>
						<td>${formatCurrency(subTotal)}</td>
					</tr>
					<tr className="summary-shipping">
						<td>Shipping:</td>
						<td>&nbsp;</td>
					</tr>
					<Radio.Group
						onChange={onUpdateShipping}
						defaultValue={typeShip}
					>
						{SHIPPING_OPTIONS.map((option) => {
							const { label, value, price } = option || {};
							return (
								<tr
									key={option.value}
									className="summary-shipping-row"
								>
									<td>
										<Radio.Item value={value}>
											{label}
										</Radio.Item>
									</td>
									<td>${formatCurrency(price)}</td>
								</tr>
							);
						})}
					</Radio.Group>

					<tr className="summary-shipping-estimate">
						<td>
							Estimate for Your Country <br />
							<Link to={PATHS.DASHBOARD}>Change address</Link>
						</td>
						<td>&nbsp;</td>
					</tr>
					<tr className="summary-total">
						<td>Total:</td>
						<td>${formatCurrency(total)}</td>
					</tr>
				</tbody>
			</table>
			<Button
				variant="outline"
				className=" btn-order btn-block"
				onClick={onProceedCheckout}
			>
				PROCEED TO CHECKOUT
			</Button>
		</div>
	);
};

export default CartSummary;
