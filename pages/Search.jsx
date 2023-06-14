import Fapi from "../API/Fapi";
import ListA from "../components/ListA";

function Search(props) {
	const name = props;
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
