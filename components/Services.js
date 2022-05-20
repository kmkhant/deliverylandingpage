import ServicesIllustrationOne from "./svg/ServicesIllustrationOne";
import ServicesIllustrationTwo from "./svg/ServicesIllustrationTwo";
import ServicesIllustrationThree from "./svg/ServicesIllustrationThree";
import Platform from "./svg/Platforms";

function Services() {
	return (
		<>
			<section className="services section container">
				<h2 className="section__title">
					Some Services We <br /> Offer
				</h2>
				<div className="services__container grid">
					<div className="services__data">
						<h3 className="services__title">
							Payment Done
						</h3>
						<ServicesIllustrationOne fill="#fdcb35" />
						<p className="services__description">
							Pay with a Visa or Paypal card without much
							ado.
						</p>
						<div>
							<a href="#" className="button button-link">
								Learn More
							</a>
						</div>
					</div>
					<div className="services__data">
						<h3 className="services__title">
							Find Your Product
						</h3>
						<ServicesIllustrationTwo fill="#fdcb35" />
						<p className="services__description">
							We offer sales of product through the
							internet.
						</p>
						<div>
							<a href="#" className="button button-link">
								Learn More
							</a>
						</div>
					</div>
					<div className="services__data">
						<h3 className="services__title">
							Product Received
						</h3>
						<ServicesIllustrationThree fill="#fdcb35" />
						<p className="services__description">
							In our app you can see the delay time of your
							order.
						</p>
						<div>
							<a href="#" className="button button-link">
								Learn More
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className="app section container">
				<div className="app__container grid">
					<div className="app__data">
						<h2 className="section__title-center">
							Watch Your Delivery <br /> At any time
						</h2>
						<p className="app__description">
							With our app you can view the route of your
							order, from our local headquarters to the
							place where you are Look for the app now!
						</p>
						<div className="app__buttons">
							<a href="#" className="button button-flex">
								<i className="bx bxl-apple button__icon" />{" "}
								App Store
							</a>

							<a href="#" className="button button-flex">
								<i className="bx bxl-play-store button__icon" />
								Google Play
							</a>
						</div>
					</div>

					<Platform fill="#FDCB35" />
				</div>
			</section>
		</>
	);
}

export default Services;
