import React from "react";
import Listrow from "./Listrow";

function List() {
	return (
		<div>
			<table className="table table-secondary table-striped table-hover table-responsive">
				<thead>
					<tr>
						<th scope="col">id</th>
						<th scope="col">name</th>
						<th scope="col">price</th>
						<th scope="col">quantity</th>
						<th scope="col">pic_add</th>
						<th scope="col">description</th>
					</tr>
				</thead>
				<tbody>
					<Listrow
						member={{
							id: 1,
							name: "997h",
							price: 1600,
							quantity: 50,
							pic_add: "http://i.imgur.com/vqp65Zy.jpg",
							description: "goodshoes",
						}}
					/>
				</tbody>
			</table>
		</div>
	);
}

export default List;
