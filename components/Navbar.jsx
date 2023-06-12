import React from "react";
import ReactDOM from "react-dom";
import MyLink from "./MyLink";

function Navbar() {
	return (
		<nav
			className="navbar navbar-expand-lg bg-dark bg-body-tertiary  "
			data-bs-theme="dark">
			<div className="container-fluid">
				<h1
					className="navbar-brand text-white  "
					style={{
						margin: "0px 0px 0px 0px",
					}}>
					BUY
				</h1>
				<h1
					className="navbar-brand text-white  "
					style={{
						backgroundColor: "rgb(255, 144, 0)",
						borderRadius: "30px",
						padding: "5px",
						marginTop: "5px",
					}}>
					SHOP
				</h1>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarScroll">
					<ul
						className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll"
						style={{ bsscrollheight: "100px" }}>
						<MyLink to="/" icon="house" color="white" text="HOME" />
						<MyLink to="/users" icon="person" color="white" text="USERS" />
						<MyLink to="/items" icon="cart3" color="white" text="ITEMS" />
					</ul>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2  text-secondary text-center "
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-light text-secondary" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
