import { useState } from "react";
import left from "../../assets/images/vector-left.svg";
import right from "../../assets/images/vector-right.svg";

export default function Carrousel({ slides }) {
	const [current, setCurrent] = useState(0); // index of first slide as 0
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // go back to the first slide
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); // go back to the last slide
	};

	return (
		<section id="carrousel-container">
			{length > 1 && (// show only for lenght > 1
				<img
					src={left} 
					alt="gauche"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt="droite"
					onClick={nextSlide}
					className="rightArrow"
				/>
			)}
			{slides.map((slide, index) => (
				<div
					key={index} // define  slider 
					className={
						current === index
							? "slider bl-msk wh-msk active-anim"
							: "slider bl-msk wh-msk"
					}
				>
					{index === current && <img src={slide} alt="appartement à louer" />}
					{index === current && (
						<span className="slider__number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
		</section>
	);
}
