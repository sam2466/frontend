import React, { useState } from "react";

function ListArow(props) {
	const member = props.member;

	// const actions = props.actions;

	return (
		<tr>
			<td scope="col">
				<button>
					<i
						className="bi bi-pencil "
						onClick={(e) => {
							e.stopPropagation();
							actions.quantity(member.i_id, quantity);
						}}></i>
				</button>
				<button>
					<i
						className="bi bi-x-circle-fill"
						onClick={(e) => {
							e.stopPropagation();
							actions.deleteItem(member.i_id);
						}}></i>
				</button>
			</td>
			<td
				scope="col"
				onClick={(e) => {
					e.stopPropagation();
					actions.quantity(member.i_id, quantity);
				}}>
				{member.i_id}
			</td>
			<td scope="col">
				<strong>{member.i_name}</strong>
			</td>
			<td scope="col">{member.i_price}</td>
			<td scope="col">{member.i_quantity}</td>
			<td scope="col">{member.b_id}</td>
			<td scope="col">{member.t_id}</td>
			<td scope="col" style={{ width: "100px" }}>
				<img
					src="{member.pic_add}"
					className="rounded float-start"
					alt="test"
				/>
				<a href={member.i_pict}>{member.i_pict}</a>
			</td>
			<td scope="col" style={{ width: "300px" }}>
				<p className="text-break">
					<em>{member.description}</em>
				</p>
			</td>
		</tr>
	);
}

export default ListArow;
