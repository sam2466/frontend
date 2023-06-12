import Navbar from "../components/Navbar";
import Reg from "../components/Reg";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Items from "../pages/Items";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route index element={<Home />}></Route>
					<Route path="/" element={<Home />}></Route>
					<Route path="/Users" element={<Users />}></Route>
					<Route path="/Items" element={<Items />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
