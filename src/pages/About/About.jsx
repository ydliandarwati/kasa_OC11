import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import about from "../../data/about.json"; // j'ai créé un fichier JSON avec les données des collapses

export default function About() {
	return (
		<>
			<AboutBanner />
			{about.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}
