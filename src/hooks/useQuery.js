import { useEffect, useState } from "react";

const useQuery = (promise, dependencies = [], configs) => {
	const { preventInitialCall = false } = configs || {};
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		if (preventInitialCall) return;
		fetchData();
	}, dependencies || []);

	const fetchData = async (query) => {
		try {
			setLoading(true);
			const res = await promise(query);
			setData(res.data?.data || []);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	return {
		data,
		loading,
		error,
		refetch: fetchData,
	};
};

export default useQuery;
