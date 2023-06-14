import React from "react";
import Fapi from "../API/Fapi";
import ListA from "../components/ListA";

function Home() {
	const { members, mutate, error, isloading } = Fapi.getRandom5();
	return (
		<div>
			<div>
				<ListA members={members} />
			</div>
		</div>
	);
}

export default Home;
