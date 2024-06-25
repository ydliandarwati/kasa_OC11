// tag component for announce page (mainly a span)
export default function Tag(props) {
	return (
		<div className="tagContainer">
			<span className="tagButton">{props.tag}</span>
		</div>
	);
}
