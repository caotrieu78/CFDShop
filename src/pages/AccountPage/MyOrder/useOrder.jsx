import { useState } from "react";

const useOrder = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [productIdReview, setProductIdReview] = useState("");
    const [orderIdReview, setOrderIdReview] = useState("");


    const orderProps = {
        isModalOpen,
        setIsModalOpen,
        productIdReview,
        orderIdReview,
        setOrderIdReview,
        setProductIdReview
    };

    return {
        orderProps
    };
};

export default useOrder;
