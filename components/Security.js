import SecurityIllustration from "./svg/SecurityIllustration";

function Security() {
	return (
		<section className="security section container">
			<div className="security__container grid">
				<div className="security__data">
					<h2 className="section__title-center">
						Your Safety is <br /> Important
					</h2>
					<p className="security__description">
						When your order reaches you, we have the health
						safety protocols, so that you are protected from
						any disease. Watch the video of how the delivery
						is made.
					</p>
				</div>

				<SecurityIllustration fill="#fdcb35" />
			</div>
		</section>
	);
}

export default Security;
