import { useState, useRef, useEffect } from "react"; 
import Chevron from "../../assets/images/arrow-down.svg";

export default function Collapse(props) {
	const [toggle, setToggle] = useState(false); // toggle state (false by default)
	const [height, setHeight] = useState(); // collapse height

	const toggleState = () => {
		// change the value of toggle after click
		setToggle(!toggle);
	};

	const refHeight = useRef(); 

	useEffect(() => {
		setHeight(`${refHeight.current.scrollHeight}px`); //original size before collapse
	}, []);

	return (
		// open/close the collapce by click
		<div className={`collapse ${props.aboutStyle}`}>
		{/* on click we run toggleState to update the collapse sitaution */}
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
				style={{ height: toggle ? `${height}` : "0px" }} 
				// height is normal when toggle, toerhwise is 0 (collapsed)
			>
				<p aria-hidden={toggle ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}
