import React, { useState } from "react";
import "../style/item.css";
import { Link } from "react-router-dom";

function Item(props) {
	const member = props.member;
	const actions = props.actions;
	const [buy, setBuy] = useState("");
	return (
		<div className="">
			<a href={member.i_pict}>
				<img
					src={member.i_pict}
					className="rounded float-start border rounded"
					alt="..."></img>
			</a>
			<div className="container">
				<div className="name">
					<h3>{member.i_name}</h3>
				</div>
				<div className="x">{member.i_quantity}left</div>
				<div className="display">
					<textarea
						style={{ width: "400px", height: "400px" }}
						name="description"
						className="form-control mx-auto text-break text-light  m-0 bg-dark  border border-secondary"
						value={member.description}
					/>
					<div className="y">price:{member.i_price}</div>
					<input
						style={{ width: "60px" }}
						type="number"
						name="price"
						className="form-control mx-auto text-dark z"
						style={{ width: "70px" }}
						value={buy}
						onChange={(e) => {
							e.stopPropagation();
							setBuy(e.target.value);
						}}
					/>
					<button
						className="btn btn-secondary text-center c btn-lg "
						onClick={() => {
							if (buy != undefined && buy >= 1 && buy < member.i_quantity) {
								const test = {
									i_quantity: Number(member.i_quantity) - Number(buy),
								};
								console.log(test);
								console.log(member.i_id);
								actions.updateItem({
									i_name: member.i_name,
									i_price: member.i_price,
									i_pict: member.i_pict,
									description: member.description,
									i_id: member.i_id,
									i_quantity: Number(member.i_quantity) - Number(buy),
								});
							} else {
								alert("re");
							}
						}}>
						<i className="bi bi-cart-plus"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Item;
