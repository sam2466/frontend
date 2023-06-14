import Fapi from "../API/Fapi";
import { useParams } from "react-router-dom"
import ListA from "../components/ListA";

function Search(props) {
	const name = useParams();
	const { members, mutate, error, isloading } = Fapi.getItemByName(name);
	const fun = () => {
		console.log(members);
	};

	return (
		<div>
			<ListA members={members} />
		</div>
	);
}

export default Search;
