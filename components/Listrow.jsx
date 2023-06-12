import React from "react";

function Listrow(props) {
	const member = props.member;
	return (
		<tr>
			<td scope="col">{member.id}</td>
			<td scope="col">{member.name}</td>
			<td scope="col">{member.price}</td>
			<td scope="col">{member.name}</td>
			<td scope="col">
				<a href={member.pic_add}>{member.pic_add}</a>
			</td>
			<td scope="col">{member.description}</td>
		</tr>
	);
}

export default Listrow;
