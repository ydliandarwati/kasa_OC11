import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/logement/:id" element={<FicheLogement />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
