// create header, containing logo and navbar

import logo from "../../assets/images/LOGO.svg";
import Nav from "../Nav/Nav";

export default function Header() {
	return (
		<header className="header-container">
			<figure className="header-container__fig">
				<img className="logo" src={logo} alt="logo of kasa agency" />
			</figure>
			<Nav className="nav-header" />
		</header>
	);
}
