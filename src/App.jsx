import Navbar from "../components/Navbar";
import Register from "../pages/Register";
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
					<Route path="/register" element={<Register />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
