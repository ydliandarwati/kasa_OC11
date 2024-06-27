import AboutBanner from "../components/AboutBanner/AboutBanner";
import Collapse from "../components/Collapse/Collapse";
import AboutArray from "../data/AboutArray.json"; // JSON file for about page

export default function About() {
	return (
		<>
			<AboutBanner />
			{AboutArray.map((element, id) => (
				<Collapse
					key={id}
					aboutTitle={element.aboutTitle}
					aboutText={element.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}
