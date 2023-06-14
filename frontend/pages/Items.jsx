import Fapi from "../API/Fapi";
import { useParams } from "react-router-dom";
import ListA from "../components/ListA";
import Item from "../components/Item";

function Items() {
	const { members, mutate, error, isloading } = Fapi.getItem();

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

export default Items;
