import { AUTHEN_TYPE } from "@/constants/general";
import { createContext, useContext, useState } from "react";

const MainContext = createContext({});

export const MainContextProvider = ({ children }) => {
	const [isAuthenModalOpen, setIsAuthenModalOpen] = useState(false);
	const [authenForm, setAuthenForm] = useState(AUTHEN_TYPE.login);

	const [isLoadingPage, setIsLoadingPage] = useState(true);

	const openAuthenModal = () => {
		// if (!!!localStorage.getItem(LOCAL_STORAGE.token)) {
		setIsAuthenModalOpen(true);
		// handle body scroll when modal open
		document.body.className = "modal-open";
		document.body.style = "padding-right: 15px;";
		// }
	};

	const closeAuthenModal = () => {
		setIsAuthenModalOpen(false);
		setAuthenForm(AUTHEN_TYPE.login);
		// handle body scroll when modal open
		document.body.className = "";
		document.body.style = "";
	};

	return (
		<MainContext.Provider
			value={{
				isAuthenModalOpen,
				authenForm,
				openAuthenModal,
				closeAuthenModal,
				setAuthenForm,
				isLoadingPage,
				setIsLoadingPage,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};

export const useMainContext = () => useContext(MainContext);
