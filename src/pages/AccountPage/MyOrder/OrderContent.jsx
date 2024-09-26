import React from 'react'

const OrderContent = ({ id, address, isReview, note, product, quantity, totalProduct, shipping, total, subTotal, discount, setIsModalOpen, setProductIdReview, setOrderIdReview, listIdReviewed }) => {
    const { fullName, phone, street, email } = address;


    const handleReview = (_idProduct) => {
        setProductIdReview(_idProduct);
        setOrderIdReview(id);
        setIsModalOpen(true);
    }

    return (
        <div className="orderItem">
            <div className="info">
                <div className="wrapInfo">
                    <label>Name: <strong>{fullName}</strong> </label>
                    <label>Phone: <strong>{phone}</strong> </label>
                    <label>Email: <strong>{email}</strong> </label>
                    <label>Address: <strong>{street}</strong> </label>
                    <label>Note: <strong>{note}</strong> </label>
                    <label>Type Shipping: <strong>{shipping?.typeShip}</strong> </label>
                </div>

            </div>
            <table className="table table-cart table-mobile">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product?.length ? product?.map((item, index) =>
                            <tr key={item?.id}>
                                <td className="product-col">
                                    <div className="product">
                                        <figure className="product-media">
                                            <a href="#">
                                                <img
                                                    src={item?.images[0]}
                                                    alt="Product image"
                                                />
                                            </a>
                                        </figure>
                                        <h3 className="product-title">
                                            <a href="#">{item.name}</a>
                                            {!isReview[index] && <div className="nav-dashboard reviewOrder" onClick={() => handleReview(item.id)}>
                                                <p className='nav-link active'>
                                                    Review
                                                </p>
                                            </div>
                                            }

                                        </h3>
                                    </div>
                                </td>
                                <td className="price-col text-center">${item?.price}</td>
                                <td className="quantity-col text-center">{quantity.length === product?.length ? quantity[index] : "0"} </td>
                                <td className="total-col text-center">{totalProduct.length === product.length ? totalProduct[index] : "0"}</td>
                            </tr>

                        ) : ""
                    }
                </tbody>
                <div className="orderPrice">
                    <div className="wrapInfo price">
                        <label>SubTotal: <strong>{subTotal}$</strong> </label>
                        <label>Discount: <strong>{discount}$</strong> </label>
                        <label>Total: <strong>{total}$</strong> </label>

                    </div>
                </div>
            </table>
        </div>
    )
}

export default OrderContent