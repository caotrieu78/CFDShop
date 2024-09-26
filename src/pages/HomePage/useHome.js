import { GENERAL_MESSAGE, HOME_MESSAGE } from "@/constants/message";
import useDebounce from "@/hooks/useDebounce";
import useMutation from "@/hooks/useMutation";
import useQuery from "@/hooks/useQuery";
import { pageService } from "@/services/pageServices";
import { productService } from "@/services/productServices";
import { subscribeService } from "@/services/subscribeService";
import { message } from "antd";
import { useMemo, useState } from "react";

export const HOT_TABS = {
	featured: "featured",
	sale: "on-sale",
	top: "top-rated",
};

const useHome = () => {
	// API Handling
	const {
		data: productsData,
		loading: productsLoading,
		error: productsError,
	} = useQuery(productService.getProducts);
	const products = productsData?.products || [];

	const {
		data: homeData,
		loading: homeDataLoading,
		error: homeDataError,
	} = useQuery(() => pageService.getPageDataByName("home"));
	const brands = homeData?.data?.brands || [];

	const {
		data: categoriesData,
		loading: categoriesLoading,
		error: categoriesError,
	} = useQuery(productService.getCategories);
	const categories = categoriesData?.products || [];

	const { loading: dealLoading, execute: dealExecute } = useMutation(
		subscribeService.subscribeDeal,
		{
			onSuccess: (data) => {
				console.log("data", data);
				message.success(HOME_MESSAGE.dealSuccess);
			},
			onFail: (error) => {
				console.log("error", error);
				message.error(GENERAL_MESSAGE.error);
			},
		}
	);

	// Hot Product Section
	const [selectedHotTab, setSelectedHotTab] = useState(HOT_TABS.featured);
	const hotProductProps = useMemo(() => {
		let hotProducts = [];
		switch (selectedHotTab) {
			case HOT_TABS.featured:
				hotProducts = products?.filter((product) => product.featured);
				break;

			case HOT_TABS.sale:
				hotProducts = products?.filter((product) => product.onSale);
				break;

			case HOT_TABS.top:
				hotProducts = products?.filter((product) => product.topRated);
				break;

			default:
				hotProducts = [];
				break;
		}
		return {
			hotProducts,
			selectedHotTab,
			onSelectHotTab: setSelectedHotTab,
		};
	}, [products, selectedHotTab]);

	// Brands Section
	const brandProps = {
		brands,
	};

	// Featured Section
	const [selectedCateSlug, setSelectedCateSlug] = useState("all");
	const featuredProps = useMemo(() => {
		const featureProducts =
			selectedCateSlug === "all"
				? [...(products || [])]
				: products?.filter(
						(product) =>
							product?.category?.slug === selectedCateSlug
				  );

		return {
			categories: [{ name: "All", slug: "all" }, ...categories],
			featureProducts,
			selectedCateSlug,
			onSelectCateSlug: (slug) => setSelectedCateSlug(slug),
		};
	}, [selectedCateSlug, products, categories, setSelectedCateSlug]);

	// Get Deal Section
	const onSubscribeDeal = (email) => {
		if (email) {
			dealExecute(email);
		}
	};
	const getDealProps = {
		onSubscribeDeal,
	};

	//  Page loading
	const isPageLoading = useDebounce(
		productsLoading || homeDataLoading || categoriesLoading,
		400
	);

	return {
		isPageLoading,
		hotProductProps,
		brandProps,
		featuredProps,
		getDealProps,
	};
};

export default useHome;
