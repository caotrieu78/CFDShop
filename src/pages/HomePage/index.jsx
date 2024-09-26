import React from "react";
import IntroSection from "./IntroSection";
import HotProductSection from "./HotProductSection";
import DealSection from "./DealSection";
import BrandSection from "./BrandSection";
import FeaturedSection from "./FeaturedSection";
import ServiceSection from "./ServiceSection";
import GetDealSection from "./GetDealSection";
import useHome from "./useHome";
import { PageLoading } from "@/components/PageLoading";

const HomePage = () => {
	const {
		isPageLoading,
		hotProductProps,
		brandProps,
		featuredProps,
		getDealProps,
	} = useHome();

	if (isPageLoading) return <PageLoading />;

	return (
		<main className="main">
			<IntroSection />
			<HotProductSection {...hotProductProps} />
			<div className="mb-7 mb-lg-11" />
			<DealSection />
			<BrandSection {...brandProps} />
			<div className="container">
				<hr className="mt-5 mb-6" />
			</div>
			<FeaturedSection {...featuredProps} />
			<div className="container">
				<hr className="mt-5 mb-0" />
			</div>
			<ServiceSection />
			<GetDealSection {...getDealProps} />
		</main>
	);
};

export default HomePage;
