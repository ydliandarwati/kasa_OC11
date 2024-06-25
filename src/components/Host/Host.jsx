// host info, name and picture
export default function Host(props) {
	return (
		<aside className="host-comp">
			<div className="host-name">{props.hostName}</div>
			<div className="host-picture">
				<img src={props.hostPic} alt={props.id} />
			</div>
		</aside>
	);
}
