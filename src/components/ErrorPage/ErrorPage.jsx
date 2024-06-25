import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<div className="error-container">
			<p className="error-number">404</p>
			<p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="error-linkToHome">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}
