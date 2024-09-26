import { PATHS } from "@/constants/pathnames";
import { NavLink } from "react-router-dom";

const NavProfile = () => {
	return (
		<aside className="col-md-4 col-lg-3">
			<ul className="nav nav-dashboard flex-column mb-3 mb-md-0">
				<li className="nav-item">
					<NavLink end to={PATHS.PROFILE.INDEX} className="nav-link">
						Account Details
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						to={PATHS.PROFILE.PROFILE_ORDER}
						className="nav-link"
					>
						Orders
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						to={PATHS.PROFILE.PROFILE_ADDRESS}
						className="nav-link"
					>
						Adresses
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						to={PATHS.PROFILE.PROFILE_WISHLIST}
						className="nav-link"
					>
						Wishlist
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/" className="nav-link">
						Sign Out
					</NavLink>
				</li>
			</ul>
		</aside>
	);
};

export default NavProfile;
