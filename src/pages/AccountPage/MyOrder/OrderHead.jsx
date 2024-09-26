import moment from 'moment'
import React from 'react'

const OrderHead = ({ updatedAt, id }) => {
    return (
        <div className="code">
            <h6>Order code: #{id}  </h6> <span> ( {updatedAt && moment(updatedAt).format('ll')} )</span>
        </div>
    )
}

export default OrderHead