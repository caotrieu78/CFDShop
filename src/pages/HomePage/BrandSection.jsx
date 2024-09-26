import React from "react";
import ReactOwlCarousel from "react-owl-carousel";

const BrandSection = ({ brands }) => {
	return (
		<div className="container">
			{/* {brands?.length > 0 && (
				<ReactOwlCarousel
					className="owl-full carousel-equal-height carousel-with-shadow"
					nav
					margin={20}
					responsive={{
						0: {
							items: 2,
						},
						600: {
							items: 2,
						},
						992: {
							items: 3,
						},
						1200: {
							items: 4,
						},
					}}
				>
					{brands.map((brand, index) => (
						<a key={index} href="#" className="brand">
							<img src={brand} alt="Brand Name" />
						</a>
					))}
				</ReactOwlCarousel>
			)} */}
			<div
				className="owl-carousel mt-5 mb-5 owl-simple"
				data-toggle="owl"
				data-owl-options='{
                                      "nav": false, 
                                      "dots": false,
                                      "margin": 30,
                                      "loop": false,
                                      "responsive": {
                                          "0": {
                                              "items":2
                                          },
                                          "420": {
                                              "items":3
                                          },
                                          "600": {
                                              "items":4
                                          },
                                          "900": {
                                              "items":5
                                          },
                                          "1024": {
                                              "items":6
                                          }
                                      }
                                  }'
			>
				<a href="#" className="brand">
					<img src="/assets/images/brands/1.png" alt="Brand Name" />
				</a>
				<a href="#" className="brand">
					<img src="/assets/images/brands/2.png" alt="Brand Name" />
				</a>
				<a href="#" className="brand">
					<img src="/assets/images/brands/3.png" alt="Brand Name" />
				</a>
				<a href="#" className="brand">
					<img src="/assets/images/brands/4.png" alt="Brand Name" />
				</a>
				<a href="#" className="brand">
					<img src="/assets/images/brands/5.png" alt="Brand Name" />
				</a>
				<a href="#" className="brand">
					<img src="/assets/images/brands/6.png" alt="Brand Name" />
				</a>
			</div>
		</div>
	);
};

export default BrandSection;
