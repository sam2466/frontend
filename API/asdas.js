const { members, mutate, error, isLoading } = Fapi.useMembers();
	if (error)
		return <div className="text-center text-white fs-5">Fetch Fail</div>;
	if (isLoading)
		return <div className="text-center text-white fs-5">Loading</div>;

	const getAllType = async () => {
		await Fapi.getAlltype();
		mutate(undefined);
	};

	const getBrandByType = async (type) => {
		await Fapi.getBrandByType(type);
		mutate(undefined);
	};

	const getItemByBrand = async (type, brand) => {
		await Fapi.getItemByBrand(type, brand);
		mutate(undefined);
	};

	const getItemById = async (id) => {
		await Fapi.getItemById(id);
		mutate(undefined);
	};

	const getItemByName = async (name) => {
		await Fapi.getItemByName(name);
		mutate(undefined);
	};
	const newItem = async (item) => {
		await Fapi.newItem(item);
		mutate(undefined);
	};

	const quantity = async (id, i_quantity) => {
		await Fapi.quantity(id, i_quantity);
		mutate(undefined);
	};

	const deleteItem = async (id) => {
		await Fapi.deleteItem(id);
		mutate(undefined);
	};

	const randomItem = async () => {
		await Fapi.randomItem();
		mutate(undefined);
	};

	const isLogin = async (account, password) => {
		await Fapi.isLogin(account, password);
		mutate(undefined);
	};
	const newUser = async (cname) => {
		await Fapi.newUser(cname);
		mutate(undefined);
	};

	const updateUser = async (account) => {
		await Fapi.updateUser(account);
		mutate(undefined);
	};

	const deleteUser = async (id) => {
		await Fapi.deleteUser(id);
		mutate(undefined);
	};

	const newRecord = async (aMember) => {
		await Fapi.newRecord(aMember);
		mutate(undefined);
	};

	const getRecordByid = async (id) => {
		await Fapi.getRecordByid(id);
		mutate(undefined);
	};

	getAllType: getAllType,
					getBrandByType: getBrandByType,
					getItemByBrand: getItemByBrand,
					getItemById: getItemById,
					getItemByName: getItemByName,
					newItem: newItem,
					quantity: quantity,
					deleteItem: deleteItem,
					randomItem: randomItem,