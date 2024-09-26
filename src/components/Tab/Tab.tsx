//@ts-nocheck
import { cn } from "@/utils/cn";
import React, { createContext, useContext, useState } from "react";

const TabContext = createContext({});

const Tab = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const onChangeTab = (index) => setActiveIndex(index);

	return (
		<TabContext.Provider
			value={{
				activeIndex,
				onChangeTab,
			}}
		>
			<div className="product-details-tab">{children}</div>
		</TabContext.Provider>
	);
};

const TabHeader = ({ children }) => {
	const { activeIndex, onChangeTab } = useContext(TabContext);

	return (
		<ul className="nav nav-pills justify-content-center" role="tablist">
			{React.Children.map(children, (child, index) => {
				if (child?.type.name === "TabHeaderItem") {
					return React.cloneElement(child, {
						isActive: activeIndex == index,
						onClick: () => {
							onChangeTab(index);
						},
					});
				}
			})}
		</ul>
	);
};
const TabHeaderItem = ({ isActive, onClick, children }) => {
	return (
		<li onClick={onClick} className="nav-item">
			<a
				className={cn(`nav-link`, { active: isActive })}
				id="product-desc-link"
				data-toggle="tab"
				href="#product-desc-tab"
				role="tab"
				aria-controls="product-desc-tab"
				aria-selected="true"
			>
				{children}
			</a>
		</li>
	);
};
const TabContent = ({ children }) => {
	const { activeIndex } = useContext(TabContext);

	return (
		<div className="tab-content">
			{React.Children.map(children, (child, index) => {
				if (child?.type.name === "TabContentItem") {
					return React.cloneElement(child, {
						isActive: activeIndex == index,
					});
				}
			})}
		</div>
	);
};
const TabContentItem = ({ isActive, children }) => {
	return (
		<div
			className={cn("tab-pane fade show", { active: isActive })}
			id="product-desc-tab"
			role="tabpanel"
			aria-labelledby="product-desc-link"
		>
			{children}
		</div>
	);
};

Tab.Header = TabHeader;
Tab.HeaderItem = TabHeaderItem;
Tab.Content = TabContent;
Tab.ContentItem = TabContentItem;

export default Tab;
