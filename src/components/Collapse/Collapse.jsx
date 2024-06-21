import { useState, useRef, useEffect } from "react"; //import des hooks de base react
import Chevron from "../../assets/images/vectorBas.svg";

export default function Collapse(props) {
	const [toggle, setToggle] = useState(false); // toggle state (false by default)
	const [heightEl, setHeightEl] = useState(); // collapse hight

	const toggleState = () => {
		// change the value of toggle after click
		setToggle(!toggle);
	};

	const refHeight = useRef(); // hight of collapse

	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`);
	}, []);

	return (
		// open/close the collapce by click
		<div className={`collapse ${props.aboutStyle}`}>
			<div onClick={toggleState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron"
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}
