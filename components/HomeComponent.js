import HomeIllustration from "./svg/HomeIllustration";

function HomeComponent() {
	return (
		<section className="home section">
			<div className="home__container container grid">
				<div className="home__data">
					<h1 className="home__title">
						Order Products <br /> Faster Easier
					</h1>
					<p className="home__description">
						Order your favourite foods at any time and we
						will deliver them right to where you are.
					</p>

					<a href="#" className="button">
						Get Started
					</a>
				</div>

				<HomeIllustration fill="#fdcb35" />
			</div>
		</section>
	);
}

export default HomeComponent;
