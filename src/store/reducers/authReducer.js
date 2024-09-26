import { LOCAL_STORAGE } from "@/constants/localStorage";
import { authService } from "@/services/authServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCart } from "./cartReducer";

const initialState = {
	profile: null,
	listOrder: null,
};

export const { reducer: authReducer, actions: authActions } = createSlice({
	initialState,
	name: "auth",
	reducers: {
		logout: (state) => {
			localStorage.removeItem(LOCAL_STORAGE.token);
			localStorage.removeItem(LOCAL_STORAGE.refreshToken);
			state.profile = null;
		},
		setUser: (state, action) => {
			state.profile = action.payload;
		},
		setOrder: (state, action) => {
			state.listOrder = action.payload;
		},
	},
});

export const { logout, setUser, setOrder } = authActions;

export const login = createAsyncThunk(
	"auth/login",
	async (payload, thunkApi) => {
		try {
			const loginRes = await authService.login(payload);
			const { token, refreshToken } = loginRes?.data?.data || {};
			localStorage.setItem(LOCAL_STORAGE.token, token);
			localStorage.setItem(LOCAL_STORAGE.refreshToken, refreshToken);

			const profileRes = await authService.getProfile();

			thunkApi.dispatch(setUser(profileRes?.data?.data));
			thunkApi.dispatch(getCart());

			return profileRes?.data?.data;
		} catch (error) {
			throw error;
		}
	}
);
