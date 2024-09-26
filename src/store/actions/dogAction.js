export const updateDog = (payload) => {
	return {
		type: "UPDATE_DOG",
		payload,
	};
};

export const fetchRandomDog = () => {
	return async (dispatch) => {
		dispatch({ type: "FETCH_DATA_REQUEST" });
		try {
			const response = await fetch(
				"https://dog.ceo/api/breeds/image/random"
			);
			const data = await response.json();
            if (data?.status === 'success') {
                dispatch(updateDog(data));
            } else {
                throw 'error'
            }
		} catch (error) {
			dispatch(updateDog(null));
		}
	};
};
