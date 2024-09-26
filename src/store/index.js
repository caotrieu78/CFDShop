import { ENV } from "@/constants/environments";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer } from "./reducers/orderReducer";

const store = configureStore({
	reducer: {
		auth: authReducer,
		cart: cartReducer,
		order: orderReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(thunkMiddleware),
	devTools: ENV === 'development',
});

export default store;
