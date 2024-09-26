import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import useAuthenModal from "./useAuthenModal";
import { cn } from "@/utils/cn";
import { AUTHEN_TYPE } from "@/constants/general";
import { styled } from "styled-components";

const AuthenModalContainer = styled.div`
	display: ${(props) => (props.isOpen ? "block" : "none")};
	padding-left: ${(props) => (props.isOpen ? "15px" : "0px")};
`;

const AuthenModal = () => {
	const { isOpen, activeTab, onChangeTab, onClose, ...authenProps } =
		useAuthenModal();

	if (!isOpen) return <></>;

	return (
		<>
			<AuthenModalContainer
				className={cn("modal", { "fade show": isOpen })}
				id="signin-modal"
				role="dialog"
				isOpen={isOpen}
				aria-modal="true"
				onClick={onClose}
			>
				<div
					className="modal-dialog modal-dialog-centered"
					role="document"
				>
					<div
						className="modal-content"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="modal-body">
							<button
								type="button"
								className="close"
								onClick={onClose}
							>
								<span aria-hidden="true">
									<i className="icon-close" />
								</span>
							</button>
							<div className="form-box">
								<div className="form-tab">
									<ul
										className="nav nav-pills nav-fill nav-border-anim"
										role="tablist"
									>
										<li className="nav-item">
											<a
												className={cn("nav-link", {
													active:
														activeTab ===
														AUTHEN_TYPE.login,
												})}
												id="signin-tab"
												// data-toggle="tab"
												// href="#signin"
												role="tab"
												// aria-controls="signin"
												// aria-selected="true"
												onClick={() =>
													onChangeTab(
														AUTHEN_TYPE.login
													)
												}
											>
												Sign In
											</a>
										</li>
										<li className="nav-item">
											<a
												className={cn("nav-link", {
													active:
														activeTab ===
														AUTHEN_TYPE.register,
												})}
												id="register-tab"
												// data-toggle="tab"
												// href="#register"
												role="tab"
												// aria-controls="register"
												// aria-selected="false"
												onClick={() =>
													onChangeTab(
														AUTHEN_TYPE.register
													)
												}
											>
												Register
											</a>
										</li>
									</ul>
									<div
										className="tab-content"
										id="tab-content-5"
									>
										<div
											className={cn("tab-pane fade", {
												"show active":
													activeTab ===
													AUTHEN_TYPE.login,
											})}
											id="signin"
											role="tabpanel"
											// aria-labelledby="signin-tab"
										>
											<LoginForm {...authenProps} />
										</div>
										{/* .End .tab-pane */}
										<div
											className={cn("tab-pane fade", {
												"show active":
													activeTab ===
													AUTHEN_TYPE.register,
											})}
											id="register"
											role="tabpanel"
											// aria-labelledby="register-tab"
										>
											<RegisterForm {...authenProps} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</AuthenModalContainer>
			<div onClick={onClose} className="modal-backdrop fade show"></div>
		</>
	);
};

export default AuthenModal;
