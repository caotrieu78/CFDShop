import { THUNK_STATUS } from "@/constants/general";
import { cartServices } from "@/services/cartServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartInfo: {},
	updateStatus: THUNK_STATUS.fullfilled,
	getStatus: THUNK_STATUS.fullfilled,
};

export const { reducer: cartReducer, actions: cartAction } = createSlice({
	initialState,
	name: "cart",
	reducers: {
		updateCacheCart: (state, action) => {
			state.cartInfo = action.payload || state.cartInfo;
		},
		clearCart: (state) => {
			state.cartInfo = {};
		},
	},
	extraReducers: (builder) => {
		// GET CART
		builder.addCase(getCart.pending, (state) => {
			state.getStatus = THUNK_STATUS.pending;
		});
		builder.addCase(getCart.fulfilled, (state, action) => {
			state.getStatus = THUNK_STATUS.fullfilled;
			state.cartInfo = action.payload;
		});
		builder.addCase(getCart.rejected, (state) => {
			state.getStatus = THUNK_STATUS.rejected;
			state.cartInfo = {};
		});
		// UPDATE CART
		builder.addCase(updateCart.pending, (state) => {
			state.updateStatus = THUNK_STATUS.pending;
		});
		builder.addCase(updateCart.fulfilled, (state) => {
			state.updateStatus = THUNK_STATUS.fullfilled;
		});
		builder.addCase(updateCart.rejected, (state) => {
			state.updateStatus = THUNK_STATUS.rejected;
		});
	},
});

export const { clearCart, updateCacheCart } = cartAction;

export const getCart = createAsyncThunk("cart/get", async (_, thunkApi) => {
	try {
		const cartRes = await cartServices.getCart();
		const cartInfo = { ...cartRes.data?.data };

		// Phần này tính toán và cập nhật lại vào state để thuận tiện sử dụng
		// Thực tế một số dự án, BE sẽ tính toán một số thông tin bên dưới và trả về qua API
		// => Trường hợp đó chúng ta không cần phải tính lại ntn
		const subTotal = cartInfo.quantity?.reduce((curr, next, index) => {
			return (
				curr +
				Number(next) * Number(cartInfo.product?.[index].price || 0)
			);
		}, 0);

		const total =
			subTotal -
			(cartInfo.discount || 0) +
			(cartInfo.shipping?.price || 0);
		const totalProduct =
			cartInfo.quantity?.reduce(
				(curr, next) => Number(curr) + Number(next),
				0
			) || 0;
		const modCartInfo = {
			...cartInfo,
			total,
			subTotal,
			totalProduct: [totalProduct.toString()],
		};

		thunkApi.fulfillWithValue(modCartInfo);
		return modCartInfo;
	} catch (error) {
		thunkApi.rejectWithValue(error);
		throw error;
	}
});

export const updateCart = createAsyncThunk(
	"cart/update",
	async (actionPayload, thunkApi) => {
		try {
			const cartRes = await cartServices.updateCart({
				...actionPayload,
				subTotal: 0,
				total: 0,
				totalProduct: [0],
				discount: 0,
				paymentMethod: "string",
			});
			const cartInfo = cartRes.data.data;
			thunkApi.dispatch(getCart());

			thunkApi.fulfillWithValue(cartInfo);
			return cartInfo;
		} catch (error) {
			thunkApi.rejectWithValue(error);
			throw error;
		}
	}
);
