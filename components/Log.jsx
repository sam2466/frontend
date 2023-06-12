import React from "react";
import "../style/login.css";

function Log() {
	return (
		<div className="main">
			<div className="login">
				<h2>Login</h2>

				<div className="input">
					<input type="text" required />
					<label>Account</label>
				</div>
				<div className="input">
					<input type="password" required />
					<label>Password</label>
				</div>
				<button id="loginButton">Login</button>
				<div className="toRegister">
					<h3 href="#">Register</h3>
				</div>
			</div>
		</div>
	);
}

export default Log;
