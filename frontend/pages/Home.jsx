import React from "react";
import Fapi from "../API/Fapi";
import Item from "../components/Item";

function Home() {
	const { members, mutate, error, isloading } = Fapi.getRandom5();

	const updateItem = async (item) => {
		await Fapi.updateItem(item);
		mutate(undefined);
	};

	return (
		<div>
			{members?.map((ele, idx) => (
				<Item key={ele.id} member={ele} actions={{ updateItem: updateItem }} />
			))}
		</div>
	);
}

export default Home;
