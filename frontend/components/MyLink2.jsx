import React from "react";

import { Link } from "react-router-dom";

function MyLink2(props) {
	return (
		<div>
			<li className="nav-item">
				<Link className="nav-link text-dark fs-5" to={props.to}>
					<i className={"bi bi-" + props.icon + " fs-2  mx-auto"}></i>
					{props.text}
				</Link>
			</li>
		</div>
	);
}

export default MyLink2;
