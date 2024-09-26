import QuantityInput from "@/components/QuantityInput";
import { formatCurrency } from "@/utils/format";
import { Empty, Modal } from "antd";
import { styled } from "styled-components";

const FigureStyle = styled.figure`
	width: 60px;
	height: 60px;

	.ant-empty-image {
		svg {
			width: 60px;
			height: 60px;
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const CartTable = ({ products, onUpdateQuantity, onRemoveProductCart }) => {
	const { confirm } = Modal;
	const onRemoveProductClick = (product) => {
		confirm({
			title: "Do you want remove this item from cart?",
			content: (
				<>
					<p>{`${product?.name || ""}`}</p>
					<p>{`${product?.quantity} x $${product?.price}`}</p>
				</>
			),
			onOk() {
				onRemoveProductCart?.(product?.id);
			},
			onCancel() {
				console.log("Cancel");
			},
		});
	};

	const onInputChange = async (value, index, errorCallback) => {
		try {
			await onUpdateQuantity?.(value, index);
		} catch (error) {
			console.log('error', error)
			errorCallback();
		}
	};

	return (
		<table className="table table-cart table-mobile">
			<thead>
				<tr>
					<th>Product</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Total</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{products?.length > 0 &&
					products.map((product, index) => {
						const { image, name, price, quantity } = product;
						return (
							<tr key={product?.id + index}>
								<td className="product-col">
									<div className="product">
										<FigureStyle
											className="product-media"
											style={{ width: 60, height: 60 }}
										>
											{image?.length > 0 ? (
												<img
													src="assets/images/demos/demo-3/products/product-6.jpg"
													alt="Product image"
												/>
											) : (
												<Empty description="" />
											)}
										</FigureStyle>
										<h3 className="product-title">
											{name}
										</h3>
									</div>
								</td>
								<td className="price-col">
									${formatCurrency(price)}
								</td>
								<td className="quantity-col">
									<QuantityInput
										className="cart-product-quantity"
										value={quantity}
										onChange={(value, errorCallback) =>
											// onUpdateQuantity?.(value)
											onInputChange?.(value, index, errorCallback)
										}
									/>
								</td>
								<td className="total-col">
									${Number(price || 0) * (quantity || 0)}
								</td>
								<td className="remove-col">
									<button
										className="btn-remove"
										onClick={() =>
											onRemoveProductClick(product)
										}
									>
										<i className="icon-close" />
									</button>
								</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
};

export default CartTable;
