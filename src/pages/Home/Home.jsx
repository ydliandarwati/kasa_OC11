import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const res = await fetch("/logements.json").then(r => r.json())  ;
			setData(res);
		};
		getData();
	});

	return (
		<>
			<Banner />
			<div className="cards-container">
				{data.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
