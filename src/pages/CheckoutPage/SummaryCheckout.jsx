import { Button } from "@/components/Button";
import { PAYMENT_METHOD } from "@/constants/general";
import { PATHS } from "@/constants/pathnames";
import { cn } from "@/utils/cn";
import { formatCurrency } from "@/utils/format";
import { Link } from "react-router-dom";

const SummaryCheckout = ({
	products,
	subTotal,
	total,
	shipping,
	paymentMethod,
	onUpdatePaymentMethod,
	onPlaceOrder,
}) => {
	const isCash = paymentMethod === PAYMENT_METHOD.cash;
	const isCard = paymentMethod === PAYMENT_METHOD.card;

	return (
		<aside className="col-lg-3">
			<div className="summary">
				<h3 className="summary-title">Your Order</h3>
				<table className="table table-summary">
					<thead>
						<tr>
							<th>Product</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{products?.length > 0 &&
							products?.map((product, index) => {
								const { id, name, price, quantity } =
									product || {};
								return (
									<tr key={id + index}>
										<td>
											<p>{`${name} x ${quantity}`}</p>
										</td>
										<td>
											$
											{formatCurrency(
												Number(price) * Number(quantity)
											)}
										</td>
									</tr>
								);
							})}
						<tr className="summary-subtotal">
							<td>Subtotal:</td>
							<td>${formatCurrency(subTotal)}</td>
						</tr>
						<tr>
							<td>Shipping:</td>
							<td style={{ textTransform: "capitalize" }}>
								{shipping?.typeShip || (
									<Link style={{textDecoration: "underline", color: "red"}} to={PATHS.CART}>Please select</Link>
								)}
							</td>
						</tr>
						<tr className="summary-total">
							<td>Total:</td>
							<td>${formatCurrency(total)}</td>
						</tr>
					</tbody>
				</table>

				<div className="accordion-summary" id="accordion-payment">
					<div className="card">
						<div
							className="card-header"
							id="heading-1"
							onClick={() =>
								onUpdatePaymentMethod(PAYMENT_METHOD.card)
							}
						>
							<h2 className="card-title">
								<a
									className={cn({ collapsed: !isCard })}
									role="button"
									// data-toggle="collapse"
									// href="#collapse-1"
									// aria-expanded="true"
									// aria-controls="collapse-1"
								>
									{" "}
									Direct bank transfer{" "}
								</a>
							</h2>
						</div>
						<div
							id="collapse-1"
							className={cn("collapse", { show: isCard })}
							// className="collapse show"
							// aria-labelledby="heading-1"
							// data-parent="#accordion-payment"
						>
							<div className="card-body">
								{" "}
								Make your payment directly into our bank
								account. Please use your Order ID as the payment
								reference. Your order will not be shipped until
								the funds have cleared in our account.{" "}
							</div>
						</div>
					</div>
					<div className="card">
						<div
							className="card-header"
							id="heading-3"
							onClick={() =>
								onUpdatePaymentMethod(PAYMENT_METHOD.cash)
							}
						>
							<h2 className="card-title">
								<a
									className={cn({ collapsed: !isCash })}
									role="button"
									// data-toggle="collapse"
									// href="#collapse-3"
									// aria-expanded={isCash ? "true" : "false"}
									// aria-controls="collapse-3"
								>
									{" "}
									Cash on delivery{" "}
								</a>
							</h2>
						</div>
						<div
							id="collapse-3"
							className={cn("collapse", { show: isCash })}
							// aria-labelledby="heading-3"
							// data-parent="#accordion-payment"
						>
							<div className="card-body">
								Quisque volutpat mattis eros. Lorem ipsum dolor
								sit amet, consectetuer adipiscing elit. Donec
								odio. Quisque volutpat mattis eros.{" "}
							</div>
						</div>
					</div>
				</div>

				<Button
					variant="outline"
					className=" btn-order btn-block"
					onClick={onPlaceOrder}
				>
					<span className="btn-text">Place Order</span>
					<span className="btn-hover-text">Proceed to Checkout</span>
				</Button>
			</div>
		</aside>
	);
};

export default SummaryCheckout;
