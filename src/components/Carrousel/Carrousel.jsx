import { useState } from "react";
import left from "../../assets/images/arrow-left.svg";
import right from "../../assets/images/arrow-right.svg";

// This component/function takes slides as input, and returns a html code containing the relevant image, based on index
export default function Carrousel({ slides }) {
	const [current, setCurrent] = useState(0); // index of first slide as 0
	const length = slides.length; // number of given images/slides

	// going to next slide function
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // go back to the first slide
	};

	// going to previous slide function
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); // go back to the last slide
	};

	return (
		<section id="carrousel-container">
		{/* add left/right arrows only for more than one slide */}
			{length > 1 && (
				<img
					src={left} 
					alt="left"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt="right"
					onClick={nextSlide}
					className="rightArrow"
				/>
			)}
			{slides.map((slide, index) => (
				<div
					key={index} // define slider 
					className={
						current === index
							? "slider bl-msk wh-msk active-anim"
							: "slider bl-msk wh-msk"
					}
				>
					{/* add the relevant slide to return + slide number */}
					{index === current && <img src={slide} alt="apartment to rent" />}
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
