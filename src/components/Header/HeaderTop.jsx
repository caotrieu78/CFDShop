import { PATHS } from "@/constants/pathnames";
import { Link } from "react-router-dom";

const HeaderTop = ({ openAuthenModal, onLogout, profile }) => {
	const PATH_ORDER = PATHS.PROFILE.PROFILE_ORDER;
	const PATH_WISHLIST = PATHS.PROFILE.PROFILE_WISHLIST;
	return (
		<div className="header-top">
			<div className="container">
				<div className="header-left">
					<a href="tel:0989596912">
						<i className="icon-phone" /> Hotline: 098 9596 912{" "}
					</a>
				</div>
				<div className="header-right">
					{profile ? (
						// Authen
						<ul className="top-menu">
							<li>
								<Link
									to={PATHS.PROFILE.INDEX}
									className="top-link-menu"
								>
									<i className="icon-user" />
									{profile.firstName || profile.email}{" "}
								</Link>
								<ul>
									<Link to={PATHS.PROFILE.INDEX}>
										Account Details
									</Link>
									<Link to={PATH_ORDER}>Your Orders</Link>
									<Link to={PATH_WISHLIST}>
										Wishlist <span>(3)</span>
									</Link>
									<a
										style={{
											cursor: "pointer",
										}}
										role="button"
										onClick={onLogout}
									>
										Sign Out
									</a>
								</ul>
							</li>
						</ul>
					) : (
						// Unauthen
						<ul className="top-menu top-link-menu">
							<li>
								<a
									// href="#signin-modal"
									// data-toggle="modal"
									style={{ cursor: "pointer" }}
									role="button"
									className="top-menu-login"
									onClick={openAuthenModal}
								>
									<i className="icon-user"></i>Login |
									Resgister{" "}
								</a>
							</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default HeaderTop;
