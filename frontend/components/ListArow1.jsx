import React, { useState } from "react";
import Fapi from "../API/Fapi";

function ListArow1(props) {
	const member = props.member;
	const actions = props.actions;
	const [type, setType] = useState(member.t_id);
	const [brand, setBrand] = useState(member.b_id);
	const [name, setName] = useState(member.i_name);
	const [price, setPrice] = useState(member.i_price);
	const [quantity, setQuantity] = useState(member.i_quantity);
	const [description, setDescription] = useState(member.description);
	const [picture, setPicture] = useState(member.i_pict);

	return (
		<tr>
			<td scope="col" className="mx-auto" style={{ width: "20px" }}>
				<button
					className="btn btn-light mx-auto "
					onClick={(e) => {
						const item = {
							b_id: Number(brand),
							t_id: Number(type),
							i_name: name,
							i_price: Number(price),
							i_quantity: Number(quantity),
							i_pict: picture,
							description: description,
						};
						console.log(item);

						if (
							type >= 1 &&
							brand >= 1 &&
							name != undefined &&
							price != undefined &&
							price > 0 &&
							quantity != undefined &&
							quantity > 0
						) {
							e.stopPropagation();

							Fapi.newItem(item);
						} else {
							alert("re");
						}
					}}>
					<i className="bi bi-plus-square "></i>
				</button>
			</td>
			<td scope="col" className="text-center " style={{ width: "5px" }}>
				<input
					style={{ width: "80px" }}
					type="number"
					name="name"
					className="form-control mx-auto text-dark "
					value={type}
					onChange={(e) => {
						e.stopPropagation();
						setType(e.target.value);
					}}
				/>
			</td>
			<td scope="col" className="text-center " style={{ width: "5px" }}>
				<input
					style={{ width: "80px" }}
					type="number"
					name="name"
					className="form-control mx-auto text-dark "
					value={brand}
					onChange={(e) => {
						e.stopPropagation();
						setBrand(e.target.value);
					}}
				/>
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
					style={{ width: "250px" }}
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

export default ListArow1;
