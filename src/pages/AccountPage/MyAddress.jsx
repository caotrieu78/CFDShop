import { useMainContext } from "@/components/MainContext";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyAddress = () => {
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
		<div className="tab-pane fade active show">
			<p>
				The following addresses will be used on the checkout page by
				default.
			</p>
			<div className="row">
				<div className="col-lg-6">
					<div className="card card-dashboard">
						<div className="card-body">
							<h3 className="card-title">Billing Address</h3>
							<p>
								<strong>Fullname:</strong> {profile?.name || profile?.firstName} <br />
								<strong>Email:</strong> {profile?.email}{" "}
								<br />
								<strong>Phone number:</strong> {profile?.phone}{" "}
								<br />
								<br />
								<Link to="/profile">
									Edit <i className="icon-edit" />
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyAddress;
