import logo from "../../assets/images/logo-footer.svg";

export default function Footer() {
	return (
		<footer className="foot-container">
			<img src={logo} alt="logo of kasa agency" />
			<p className="foot-container__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
