import { useRef, useState } from "react";
import { Link } from "react-scroll";

function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const [selectedTheme, setSelectedTheme] = useState(0);

	const darkTheme = "dark-theme";
	const iconTheme = "bx-toggle-right";
	const ref = useRef(null);

	return (
		<header className="header scroll-header" id="header">
			<nav className="nav container">
				<a href="#" className="nav__logo">
					Delivery
				</a>

				<div
					className={`nav__menu ${
						showMenu ? "show-menu" : ""
					}`}
					id="nav-menu"
				>
					<ul className="nav__list">
						<li className="nav__item">
							<Link
								activeClass="active-link"
								to="home"
								spy={true}
								smooth={true}
								offset={-50}
								duration={250}
								onClick={() => {
									setShowMenu((prev) => !prev);
								}}
							>
								<span className="nav__link">Home</span>
							</Link>
						</li>
						<li className="nav__item">
							<Link
								activeClass="active-link"
								to="about"
								spy={true}
								smooth={true}
								offset={-50}
								duration={250}
								onClick={() => {
									setShowMenu((prev) => !prev);
								}}
							>
								<span className="nav__link">About</span>
							</Link>
						</li>
						<li className="nav__item">
							<Link
								activeClass="active-link"
								to="services"
								spy={true}
								smooth={true}
								offset={-30}
								duration={250}
								onClick={() => {
									setShowMenu((prev) => !prev);
								}}
							>
								<span className="nav__link">Services</span>
							</Link>
						</li>
						<li className="nav__item">
							<Link
								activeClass="active-link"
								to="contact"
								spy={true}
								smooth={true}
								offset={-50}
								duration={250}
								onClick={() => {
									setShowMenu((prev) => !prev);
								}}
							>
								<span className="nav__link">
									Contact Us
								</span>
							</Link>
						</li>

						<i
							className="bx bx-toggle-left change-theme"
							id="theme-button"
							ref={ref}
							onClick={() => {
								document.body.classList.toggle(
									"dark-theme"
								);
								ref.current.classList.toggle(iconTheme);
								setSelectedTheme((prev) => !prev);

								if (selectedTheme) {
									document.body.classList[
										selectedTheme ? "add" : "remove"
									](darkTheme);
									ref.current.classList[
										selectedTheme ? "add" : "remove"
									](iconTheme);
								}
							}}
						></i>
					</ul>
				</div>

				<div className="nav__toggle" id="nav-toggle">
					<i
						className="bx bx-grid-alt"
						onClick={() => {
							setShowMenu((prev) => !prev);
						}}
					></i>
				</div>

				<a href="#" className="button button__header">
					Order Now!
				</a>
			</nav>
		</header>
	);
}

export default Header;
