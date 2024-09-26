import NavProfile from "@/layouts/NavProfile";
import { Outlet } from "react-router-dom";
import LoadingProfile from "@/pages/AccountPage/LoadingProfile";
import { useMainContext } from "@/components/MainContext";

const ProfileLayout = () => {
	const { isLoadingPage } = useMainContext();
	return (
		<div>
			{isLoadingPage && <LoadingProfile />}
			<main className="main">
				<div
					className="page-header text-center"
					style={{
						backgroundImage:
							'url("/assets/images/page-header-bg.jpg")',
					}}
				>
					<div className="container">
						<h1 className="page-title">My Account</h1>
					</div>
				</div>
				<nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
					<div className="container">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">Home</a>
							</li>
							<li
								className="breadcrumb-item active"
								aria-current="page"
							>
								My Account
							</li>
						</ol>
					</div>
				</nav>
				<div className="page-content">
					<div className="dashboard">
						<div className="container">
							<div className="row">
								<NavProfile />
								<div className="col-md-8 col-lg-9">
									<div className="tab-content">
										<Outlet />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default ProfileLayout;
