import { THUNK_STATUS } from "@/constants/general";
import { cartServices } from "@/services/cartServices";
import { orderServices } from "@/services/orderServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCart } from "./cartReducer";

const initialState = {
	orderInfo: {},
	checkoutStatus: THUNK_STATUS.fullfilled,
};

export const { reducer: orderReducer, actions: orderAction } = createSlice({
	initialState,
	name: "order",
	reducers: {},
	extraReducers: (builder) => {
		// GET ORDER
		builder.addCase(getOrder.fulfilled, (state, action) => {
			state.orderInfo = action.payload;
		});

		// Checkout
		builder.addCase(checkout.pending, (state) => {
			state.checkoutStatus = THUNK_STATUS.pending;
		});
		builder.addCase(checkout.fulfilled, (state) => {
			state.checkoutStatus = THUNK_STATUS.fullfilled;
		});
		builder.addCase(checkout.rejected, (state) => {
			state.checkoutStatus = THUNK_STATUS.rejected;
		});
	},
});

export const {} = orderAction;

export const getOrder = createAsyncThunk(
	"order/get",
	async (_, thunkApi) => {
		try {
			const orderRes = await orderServices.getOrders();
			const orderInfo = {...orderRes?.data?.data};
            console.log('orderInfo', orderInfo)

			thunkApi.fulfillWithValue(orderInfo);
			return orderInfo;
		} catch (error) {
			thunkApi.rejectWithValue(error);
			throw error;
		}
	}
);

export const checkout = createAsyncThunk(
	"order/checkout",
	async (checkoutPayload, thunkApi) => {
		try {
			const res = await orderServices.checkout(checkoutPayload);
			const checkoutRes = res.data.data;
            console.log('checkoutRes', checkoutRes)

            // GET ORDER
			thunkApi.dispatch(getOrder());

            // REFETCH CART
			thunkApi.dispatch(getCart());

			thunkApi.fulfillWithValue(checkoutRes);
			return checkoutRes;
		} catch (error) {
			thunkApi.rejectWithValue(error);
			throw error;
		}
	}
);
