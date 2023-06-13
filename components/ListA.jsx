import React from "react";
import ListArow from "./ListArow";

function ListA(props) {
	const members = props.members;
	const actions = props.actions;
	return (
		<div className="">
			<table className="table table-secondary table-striped table-hover table-responsive">
				<thead>
					<tr>
						<th scope="col">actions</th>
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
						<ListArow key={ele.id} member={ele} actions={actions} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ListA;
