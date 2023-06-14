import Item from "../components/Item";

function Items() {
	return (
		<div>
			{members?.map((ele, idx) => (
				<Item key={ele.id} member={ele} actions={actions} />
			))}
		</div>
	);
}

export default Items;
