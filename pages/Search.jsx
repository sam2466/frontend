import Fapi from "../API/Fapi";
import ListA from "../components/ListA";

function Search(props) {
	const { members, mutate, error, isloading } = Fapi.getItemById(props);

	const updateItem = async (item) => {
		await Fapi.updateItem(item);
		mutate(undefined);
	};
	const deleteItem = async (id) => {
		await Fapi.deleteItem(id);
		mutate(undefined);
	};
	const newItem = async (item) => {
		await Fapi.newItem(item);
		mutate(undefined);
	};

	return (
		<div>
			<ListA
				members={members}
				actions={{
					deleteItem: deleteItem,
					updateItem: updateItem,
					newItem: newItem,
				}}
			/>
		</div>
	);
}

export default Search;
