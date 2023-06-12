import React from "react";
import "../style/register.css";

function Reg() {
	return (
		<div className="main">
			<div className="register">
				<form action="">
					<h2>Register</h2>

					<div className="input">
						<input type="text" maxLength={16} required />
						<label>Account(16)</label>
					</div>
					<div className="input">
						<input type="password" maxLength={16} required />
						<label>Password(16)</label>
					</div>
					<div className="input">
						<input type="text" maxLength={8} required />
						<label>Name(8)</label>
					</div>
					<div className="longInput">
						<input type="text" maxLength={32} />
						<label>Address(32)</label>
					</div>
					<div className="longInput">
						<input type="text" maxLength={32} required />
						<label>E_mail(32)</label>
					</div>
					<div className="input">
						<input type="text" maxLength="16" />
						<label>Birth_Day(32)</label>
					</div>
					<button id="registerButton">Register</button>
				</form>
			</div>
		</div>
	);
}

export default Reg;
