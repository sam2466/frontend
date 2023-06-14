import React, { useState } from "react";
import ListArow from "./ListArow";
import ListArow1 from "./ListArow1";
function ListA(props) {
	const members = props.members;
	const actions = props.actions;
	return (
		<div>
			<table className="table table-secondary table-striped table-hover table-responsive">
				<thead>
					<tr>
						<th className="text-center " scope="col">
							actions
						</th>
						<th className="text-center " scope="col">
							t_id
						</th>
						<th className="text-center " scope="col">
							b_id
						</th>
						<th className="text-center " scope="col">
							i_id
						</th>
						<th className="text-center " scope="col">
							i_name
						</th>
						<th className="text-center " scope="col">
							i_price
						</th>
						<th className="text-center " scope="col">
							i_quantity
						</th>
						<th className="text-center " scope="col">
							description
						</th>
						<th className="text-center " scope="col">
							i_pict
						</th>
					</tr>
				</thead>
				<tbody>
					<ListArow1
						member={{
							i_name: "",
							i_price: "",
							i_quantity: "",
							i_pict: "",
							description: "",
							b_id: 0,
							t_id: 0,
						}}
						actions={actions}
					/>
					{members?.map((ele, idx) => (
						<ListArow key={ele.id} member={ele} actions={actions} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ListA;
