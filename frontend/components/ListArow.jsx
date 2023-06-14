import React, { useState } from "react";

function ListArow(props) {
	const member = props.member;
	const actions = props.actions;
	const [name, setName] = useState(member.i_name);
	const [price, setPrice] = useState(member.i_price);
	const [quantity, setQuantity] = useState(member.i_quantity);
	const [description, setDescription] = useState(member.description);
	const [picture, setPicture] = useState(member.i_pict);

	return (
		<tr>
			<td scope="col" style={{ width: "20px" }}>
				<button
					className="btn btn-light my-1"
					onClick={(e) => {
						e.stopPropagation();
						const item = {
							i_id: member.i_id,
							i_name: name,
							i_price: price,
							i_pict: picture,
							i_quantity: quantity,
							description: description,
						};
						if (
							name != undefined &&
							price != undefined &&
							price > 0 &&
							quantity != undefined &&
							quantity > 0
						) {
							console.log(item);
							actions.updateItem(item);
						} else {
							alert("re");
						}
					}}>
					<i className="bi bi-pencil "></i>
				</button>
				<button
					className="btn btn-light"
					onClick={(e) => {
						e.stopPropagation();
						actions.deleteItem(member.i_id);
					}}>
					<i className="bi bi-x-circle-fill"></i>
				</button>
			</td>
			<td scope="col" className="text-center " style={{ width: "20px" }}>
				{member.t_id}
			</td>
			<td scope="col" className="text-center " style={{ width: "20px" }}>
				{member.b_id}
			</td>
			<td style={{ width: "5px" }}>{member.i_id}</td>
			<td scope="col" className="text-center " style={{ width: "200px" }}>
				<input
					type="text"
					name="name"
					className="form-control mx-auto text-dark "
					value={name}
					onChange={(e) => {
						e.stopPropagation();
						setName(e.target.value);
					}}
				/>
			</td>
			<td scope="col" style={{ width: "80px" }}>
				<input
					type="number"
					name="price"
					className="form-control mx-auto text-dark "
					value={price}
					onChange={(e) => {
						e.stopPropagation();
						setPrice(e.target.value);
					}}
				/>
			</td>
			<td scope="col" style={{ width: "20px" }}>
				<input
					style={{ width: "50px" }}
					type="number"
					name="quantity"
					className="form-control mx-auto text-dark  "
					value={quantity}
					onChange={(e) => {
						e.stopPropagation();
						setQuantity(e.target.value);
					}}
				/>
			</td>
			<td scope="col" style={{ width: "100px" }}>
				<textarea
					style={{ width: "500px" }}
					name="description"
					className="form-control mx-auto text-dark text-break m-0"
					value={description}
					onChange={(e) => {
						e.stopPropagation();
						setDescription(e.target.value);
					}}
				/>
			</td>
			<td scope="col" style={{ width: "20px" }}>
				<input
					style={{ width: "50px" }}
					type="text"
					name="picture"
					className="form-control mx-auto text-dark  "
					value={picture}
					onChange={(e) => {
						e.stopPropagation();
						setPicture(e.target.value);
					}}
				/>
			</td>
		</tr>
	);
}

export default ListArow;
