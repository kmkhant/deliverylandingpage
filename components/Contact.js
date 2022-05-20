function Contact() {
	return (
		<section className="contact section container">
			<div className="contact__container contact-grid">
				<div className="contact__content">
					<h2 className="section__title-center">
						Contact Us From <br /> Here
					</h2>
					<p className="contact__description">
						You can contact us from here, you can write to
						us, call us or visit our service center, we will
						gladly assist you.
					</p>
				</div>
				<ul className="contact__content grid">
					<li className="contact__address">
						Telephone:{" "}
						<span className="contact__information">
							{" "}
							&nbsp;999 - 888 - 777{" "}
						</span>
					</li>
					<li className="contact__address">
						Email:{" "}
						<span className="contact__information">
							{" "}
							&nbsp;delivery@email.com{" "}
						</span>
					</li>
					<li className="contact__address">
						Address:{" "}
						<span className="contact__information">
							{" "}
							&nbsp;Mandalay, Myanmar(Burma){" "}
						</span>
					</li>
				</ul>

				<div className="contact__content">
					<a href="#" className="button">
						Contact Us
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;
