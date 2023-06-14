import React from "react";
import "../style/item.css";
import { Link } from "react-router-dom";

function Item(props) {
	const item = {
		i_name: "NIKE ZOOM SUPERREP 4 NN",
		i_price: 9999,
		i_quantity: 32,
		i_pict:
			"https://static.nike.com.hk/resources/product/DO9837-100/DO9837-100_BL1.png",
		description:
			"動起四頭肌，專注於跳箱訓練。 超級組訓練讓你汗水淋漓。 這就是你生活的意義：掙扎、關鍵時刻、突破、轉變。 Nike Zoom SuperRep 4 NN 女子高強度訓練鞋專為疾速爆發力、心跳加速的變速訓練及快節奏運動設計，讓你突破 HIIT 的全新境界。",
	};
	const member = props.member;
	// const actions = props.actions;
	return (
		<div className="">
			<a href={member.i_pict}>
				<img
					src="../1160358.png"
					className="rounded float-start border rounded"
					alt="..."></img>
			</a>
			<div className="container">
				<div className="name">
					<h3>{member.i_name}</h3>
				</div>
				<div>{member.i_quantity}left</div>
				<div className="display">
					<textarea
						style={{ width: "400px", height: "400px" }}
						name="description"
						className="form-control mx-auto text-break text-light  m-0 bg-dark  border border-secondary"
						value={member.description}
					/>
					<div>{member.i_price}</div>
					<button className="btn btn-secondary  ">
						<i className="bi bi-cart-plus"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Item;
