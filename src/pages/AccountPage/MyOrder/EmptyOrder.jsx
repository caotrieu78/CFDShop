import React from 'react'

const EmptyOrder = () => {
    return (
        <>
            <p>No order has been made yet.</p>
            <a href="category.html" className="btn btn-outline-primary-2">
                <span>GO SHOP</span>
                <i className="icon-long-arrow-right" />
            </a>
            <br />
            <br />
        </>
    )
}

export default EmptyOrder