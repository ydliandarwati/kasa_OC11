export default function Card({ cover, title }) {
	 // announce cards containing image and title
	return (
		<article className="cards-logement">
			<img src={cover} alt="location" />
			<div className="cards-logement__layer">
				<p className="cards-logement__title">{title}</p>
			</div>
		</article>
	);
}
