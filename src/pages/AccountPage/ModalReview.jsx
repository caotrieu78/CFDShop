import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { authService } from '@/services/authServices';
import { setOrder } from '@/store/reducers/authReducer';
import { Rate, Modal, message } from 'antd';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const ModalReview = ({ isModalOpen, setIsModalOpen, productIdReview, orderIdReview, setListIdReviewed, listIdReviewed }) => {
    const dispatch = useDispatch();

    const [rate, setRate] = useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const _data = {
            ...data,
            order: orderIdReview,
            rate: rate,
            product: productIdReview,
        }

        try {
            const res = await authService.review(_data);
            if (res?.status == 201) {
                message.success("Review success!!!");
                const res = await authService.getOrderMe();
                if (res?.data?.data) {
                    dispatch(setOrder(res.data.data));
                }
                setIsModalOpen(false);
            }
        } catch (error) {
            console.log('🚀error---->', error);
            message.error("Something went wrong")
            setIsModalOpen(false);

        }
    };

    const changeRate = (_rate) => {
        setRate(_rate);
    }

    return (
        <div className='modalReview'>

            <Modal title="Review Product" open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)}>
                <div className="rating">
                    <Rate onChange={changeRate} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="Title review"
                        required
                        {...register("title", {
                            required: "Please enter your title",

                        })}
                        error={errors?.title?.message || ""}
                    />
                    <Input
                        label="Description review"
                        required
                        {...register("description", {
                            required: "Please enter your description",

                        })}
                        error={errors?.description?.message || ""}
                    />
                    <div className="flexBtn">
                        <Button type="submit" variant="outline">
                            <span>Send</span>
                            <i className="icon-long-arrow-right" />
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default ModalReview