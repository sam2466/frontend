import React, { useState } from "react";
import Fapi from "../API/Fapi";
import ListA from "../components/ListA";

function Items() {
	const members = Fapi.randomItem();

	const newItem = async (item) => {
		await Fapi.newItem(item);
		mutate(undefined);
	};

	const quantity = async (id, i_quantity) => {
		await Fapi.quantity(id, i_quantity);
		mutate(undefined);
	};

	const deleteItem = async (id) => {
		await Fapi.deleteItem(id);
		mutate(undefined);
	};

	return (
		<div>
			<ListA
				members={members}
				actions={{
					newItem: newItem,
					quantity: quantity,
					deleteItem: deleteItem,
				}}
			/>
		</div>
	);
}

export default Items;
