import OrderContent from '@/pages/AccountPage/MyOrder/OrderContent';
import OrderHead from '@/pages/AccountPage/MyOrder/OrderHead';
import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react'
import { Collapse, theme } from 'antd';
import ModalReview from '@/pages/AccountPage/ModalReview';
import useOrder from '@/pages/AccountPage/MyOrder/useOrder';

const ListOrder = ({ listOrder }) => {

    const { token } = theme.useToken();
    const { orderProps } = useOrder();

    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

    const getItems = (panelStyle) => listOrder.map((e, index) => {
        return {
            key: index,
            label: <OrderHead updatedAt={e.updatedAt} id={e.id} />,
            children: <OrderContent {...e}
                {...orderProps}
            />,
            style: panelStyle,
        }
    })
    return (
        <div className='order'>
            <h2>List order me:</h2>
            <Collapse defaultActiveKey={['0']}
                style={{ background: token.colorBgContainer }}
                items={getItems(panelStyle)}
                bordered={false}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            />

            <ModalReview
                {...orderProps}
            />
        </div>
    )
}

export default ListOrder