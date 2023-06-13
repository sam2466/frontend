import React, { useState } from "react";
import ListArow from "./ListArow";

function ListA(props) {
	const [members, setMembers] = useState([
		{
			i_id: 0,
			i_name: "",
			i_price: 0,
			i_quantity: 0,
			b_id: 0,
			t_id: 0,
			i_pict: "",
			description: null,
		},
	]);

	const fun = () => {
		props.members.then((r) => {
			setMembers([...r]);
		});
	};

	return (
		<div>
			<table className="table table-secondary table-striped table-hover table-responsive">
				<thead>
					<tr>
						<th scope="col" onClick={fun}>
							actions
						</th>
						<th scope="col">i_id</th>
						<th scope="col">i_name</th>
						<th scope="col">i_price</th>
						<th scope="col">i_quantity</th>
						<th scope="col">b_id</th>
						<th scope="col">t_id</th>
						<th scope="col">i_pict</th>
						<th scope="col">description</th>
					</tr>
				</thead>
				<tbody>
					{members.map((ele, idx) => (
						<ListArow key={idx} member={ele} />
					))}{" "}
				</tbody>
			</table>
		</div>
	);
}

export default ListA;
