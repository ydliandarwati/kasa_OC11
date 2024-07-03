import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import FicheLogement from "./pages/FicheLogement";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error";
import About from "./pages/About";


function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Navigate replace to="/accueil" />} />
					<Route path="/accueil" element={<Home />} />
					<Route path="/logement/:id" element={<FicheLogement />} />
					<Route path="*" element={<Error />} />
					<Route path="/about" element={<About />} />

				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
