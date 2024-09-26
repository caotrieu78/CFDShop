import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import useHeader from "./useHeader";

const Header = () => {
	const { headerTopProps, headerMiddleProps } = useHeader();

	return (
		<header className="header">
			<HeaderTop {...headerTopProps} />
			<HeaderMiddle {...headerMiddleProps} />
		</header>
	);
};

export default Header;
