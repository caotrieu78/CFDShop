import { useMainContext } from "@/components/MainContext";
import FormAccount from "@/pages/AccountPage/FormAccount";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AccountPage = () => {

	const { setIsLoadingPage, isLoadingPage } = useMainContext();
	const { profile } = useSelector((store) => store.auth);

	/* <-------  Effect Check loading  -------> */
	useEffect(() => {
		if (profile) {
			setTimeout(() => {
				setIsLoadingPage(false);
			}, 1000)
		}
	}, [profile]);

	if (!profile || isLoadingPage) return null;


	return (
		profile && <FormAccount profile={profile} />
	);
};

export default AccountPage;
