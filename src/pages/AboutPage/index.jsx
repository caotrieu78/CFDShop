import React from "react";

const AboutPage = () => {
	return (
		<main className="main">
			<nav
				aria-label="breadcrumb"
				className="breadcrumb-nav border-0 mb-0"
			>
				<div className="container">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="index.html">Home</a>
						</li>
						<li
							className="breadcrumb-item active"
							aria-current="page"
						>
							About us
						</li>
					</ol>
				</div>
			</nav>
			<div className="container">
				<div
					className="page-header page-header-big text-center"
					style={{
						backgroundImage:
							'url("assets/images/about-header-bg.jpg")',
					}}
				>
					<h1 className="page-title text-white">
						About us <span className="text-white">Who we are</span>
					</h1>
				</div>
			</div>
			<div className="page-content pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 mb-3 mb-lg-0">
							<h2 className="title">Our Vision</h2>
							<p>
								{" "}
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit. Phasellus hendrerit.
								Pellentesque aliquet nibh nec urna. In nisi
								neque, aliquet vel, dapibus id, mattis vel,
								nisi. Sed pretium, ligula sollicitudin laoreet
								viverra, tortor libero sodales leo, eget blandit
								nunc tortor eu nibh.{" "}
							</p>
						</div>
						<div className="col-lg-6">
							<h2 className="title">Our Mission</h2>
							<p>
								{" "}
								Sed egestas, ante et vulputate volutpat, eros
								pede semper est, vitae luctus metus libero eu
								augue. Morbi purus libero, faucibus adipiscing,
								commodo quis, gravida id, est. Sed lectus.{" "}
								<br /> Praesent elementum hendrerit tortor. Sed
								semper lorem at felis.{" "}
							</p>
						</div>
					</div>
					<div className="mb-5" />
				</div>
				<div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
					<div className="container">
						<div className="row">
							<div className="col-lg-5 mb-3 mb-lg-0">
								<h2 className="title">Who We Are</h2>
								<p className="lead text-primary mb-3">
									{" "}
									Pellentesque odio nisi, euismod pharetra a
									ultricies <br /> in diam. Sed arcu. Cras
									consequat{" "}
								</p>
								<p className="mb-2">
									{" "}
									Sed pretium, ligula sollicitudin laoreet
									viverra, tortor libero sodales leo, eget
									blandit nunc tortor eu nibh. Suspendisse
									potenti. Sed egestas, ante et vulputate
									volutpat, uctus metus libero eu augue.{" "}
								</p>
							</div>
							<div className="col-lg-6 offset-lg-1">
								<div className="about-images">
									<img
										src="/assets/images/about/img-1.jpg"
										alt=""
										className="about-img-front"
									/>
									<img
										src="/assets/images/about/img-2.jpg"
										alt=""
										className="about-img-back"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="brands-text">
								<h2 className="title">
									The world's premium design brands in one
									destination.
								</h2>
								<p>
									Phasellus hendrerit. Pellentesque aliquet
									nibh nec urna. In nisi neque, aliquet vel,
									dapibus id, mattis vel, nis
								</p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="brands-display">
								<div className="row justify-content-center">
									<div className="col-6 col-sm-4">
										<a href="#" className="brand">
											<img
												src="/assets/images/brands/1.png"
												alt="Brand Name"
											/>
										</a>
									</div>
									<div className="col-6 col-sm-4">
										<a href="#" className="brand">
											<img
												src="/assets/images/brands/2.png"
												alt="Brand Name"
											/>
										</a>
									</div>
									<div className="col-6 col-sm-4">
										<a href="#" className="brand">
											<img
												src="/assets/images/brands/3.png"
												alt="Brand Name"
											/>
										</a>
									</div>
									<div className="col-6 col-sm-4">
										<a href="#" className="brand">
											<img
												src="/assets/images/brands/4.png"
												alt="Brand Name"
											/>
										</a>
									</div>
									<div className="col-6 col-sm-4">
										<a href="#" className="brand">
											<img
												src="/assets/images/brands/5.png"
												alt="Brand Name"
											/>
										</a>
									</div>
									<div className="col-6 col-sm-4">
										<a href="#" className="brand">
											<img
												src="/assets/images/brands/6.png"
												alt="Brand Name"
											/>
										</a>
									</div>
									<div className="col-6 col-sm-4">
										<a href="#" className="brand">
											<img
												src="/assets/images/brands/7.png"
												alt="Brand Name"
											/>
										</a>
									</div>
									<div className="col-6 col-sm-4">
										<a href="#" className="brand">
											<img
												src="/assets/images/brands/8.png"
												alt="Brand Name"
											/>
										</a>
									</div>
									<div className="col-6 col-sm-4">
										<a href="#" className="brand">
											<img
												src="/assets/images/brands/9.png"
												alt="Brand Name"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-2" />
			</div>
		</main>
	);
};

export default AboutPage;
