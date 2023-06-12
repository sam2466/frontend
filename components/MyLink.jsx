import { Link } from "react-router-dom";

function MyLink(props) {
	return (
		<div>
			<li className="nav-item">
				<Link className="nav-link text-white fs-5" to={props.to}>
					<i className={"bi bi-" + props.icon + " fs-2  mx-auto"}></i>
					{props.text}
				</Link>
			</li>
		</div>
	);
}

export default MyLink;
