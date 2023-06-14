import Navbar from "../components/Navbar";
import Reg from "../components/Reg";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Items from "../pages/Items";
import Manage from "../pages/Manage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route index element={<Login />}></Route>
					<Route path="/Home" element={<Home />}></Route>
					<Route path="/Users" element={<Users />}></Route>
					<Route path="/Items" element={<Items />}></Route>
					<Route path="/Manage" element={<Manage />}></Route>
					<Route path="/register" element={<Register />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
