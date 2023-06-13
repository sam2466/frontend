/* eslint-disable react/prop-types */
import  { useState } from "react";
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
			description: "",
		}
	]);

	// const fun = () => {
	// 	props.members.then((r) => {
	// 		setMembers([...r]);
	// 		console.log(members);
	// 	});
	// };onClick={fun}
	const promise = props.members;
	promise.then((result) => {
		setMembers([...result]);
	})

	const actions = props.actions;

	return (
		<div>
			<table className="table table-secondary table-striped table-hover table-responsive">
				<thead>
					<tr>
						<th scope="col" >
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
						<ListArow key={idx} member={ele} actions ={actions}/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ListA;
