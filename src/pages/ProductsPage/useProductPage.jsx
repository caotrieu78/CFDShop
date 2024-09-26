import useQuery from "@/hooks/useQuery";
import { productService } from "@/services/productServices";
import { useLocation, useSearchParams } from "react-router-dom";
import queryString from "query-string";
import { useEffect, useMemo } from "react";
import { SORT_OPTIONS } from "@/constants/general";
import useDebounce from "@/hooks/useDebounce";

const PRODUCT_LIMITS = 9;

const useProductPage = () => {
	// Initial Hooks
	const { search } = useLocation();
	const queryObject = queryString.parse(search);

	const [_, setSearchParams] = useSearchParams();

	// Fetching API
	const {
		data: productsData,
		loading: productsLoading,
		error: productsError,
		refetch: refetchProducts,
	} = useQuery(
		(query) =>
			productService.getProducts(query || `?limit=${PRODUCT_LIMITS}`),
		[],
		{
			preventInitialCall: true,
		}
	);
	const products = productsData?.products || [];
	const productsPagi = productsData?.pagination || {};

	const {
		data: categoriesData,
		loading: categoriesLoading,
		error: categoriesError,
	} = useQuery(productService.getCategories);
	const categories = categoriesData?.products || [];

	// useEffect
	useEffect(() => {
		refetchProducts?.(search);
	}, [search]);

	// General Functions
	const updateQueryString = (queryObject) => {
		const newQueryString = queryString.stringify({
			...queryObject,
			limit: PRODUCT_LIMITS,
		});
		setSearchParams(new URLSearchParams(newQueryString));
	};

	// Toolbox Props
	const activeSort = useMemo(() => {
		return (
			Object.values(SORT_OPTIONS).find(
				(options) =>
					options.queryObject.orderBy === queryObject.orderBy &&
					options.queryObject.order === queryObject.order
			)?.value || SORT_OPTIONS.popularity.value
		);
	}, [queryObject]);
	const onSortChange = (sortType) => {
		const sortQueryObject = SORT_OPTIONS[sortType].queryObject;
		if (sortQueryObject) {
			updateQueryString({
				...queryObject,
				...sortQueryObject,
				page: 1,
			});
		}
	};
	const toolboxProps = {
		showNumb: products?.length || 0,
		totalNumb: productsPagi.total || 0,
		activeSort,
		onSortChange,
	};

	// Product List Props
	const productListLoading = useDebounce(productsLoading, 2000);
	const productListProps = {
		isLoading: productListLoading,
		isError: !!productsError,
		products,
	};

	// Pagination Props
	const onPagiChange = (page) => {
		updateQueryString({ ...queryObject, page: page });
	};
	const pagiProps = {
		page: Number(productsPagi.page || queryObject.page || 1),
		limit: Number(productsPagi.limit || 0),
		total: Number(productsPagi.total || 0),
		onPagiChange,
	};

	// Filter Props
	const onCateFilterChange = (cateId) => {
		updateQueryString({ ...queryObject, category: cateId, page: 1 });
	};
	const filterProps = {
		categories: categories || [],
		isLoading: categoriesLoading,
		isError: categoriesError,
		activeCategory: queryObject.category,
		onCateFilterChange,
	};

	return {
		toolboxProps,
		productListProps,
		pagiProps,
		filterProps,
	};
};

export default useProductPage;
