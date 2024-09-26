export const increment = (payload) => {
	return {
		type: "INCREMENT",
		payload: payload || 1,
	};
};

export const decrement = (payload) => {
	return {
		type: "DECREMENT",
		payload: payload || 1,
	};
};
