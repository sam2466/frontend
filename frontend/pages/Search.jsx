import Fapi from "../API/Fapi";
import { useParams } from "react-router-dom";
import ListA from "../components/ListA";
import Item from "../components/Item";

function Search() {
	const { name } = useParams();
	console.log(name);
	const { members, mutate, error, isloading } = Fapi.getItemByName(name);
	const fun = () => {
		console.log(members);
	};

	return (
		<div>
			{members?.map((ele, idx) => (
				<Item key={ele.id} member={ele} />
			))}
		</div>
	);
}

export default Search;
