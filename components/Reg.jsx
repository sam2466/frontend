import React from "react";
import "../style/register.css";
import Fapi from "../API/Fapi"

function Reg() {
	const data = [{
		cname: "",
		c_password: "",
		c_email: "",
		c_birth: "",
		addr : ""
	}];
	const promise = Fapi.newUser(data);

	promise.then((result) => {
		console.log(result);
	})
	
	return (
		<div className="main">
			<div className="register">
				<form className="mx-auto" action="">
					<h2>Register</h2>

					<div className="input mx-auto my-3">
						<input name = "account" type="text" maxLength={16} required />
						<label>Account(16)</label>
					</div>
					
					<div className="input mx-auto my-3">
						<input name = "password" type="password" maxLength={16} required />
						<label>Password(16)</label>
					</div>
					
					{/* <div className="input mx-auto my-3">
						<input name = "name" type="text" maxLength={8} required />
						<label>Name(8)</label>
					</div> */}
					
					<div className="longInput mx-auto my-3">
						<input name = "address" type="text" maxLength={32} />
						<label>Address(32)</label>
					</div>
					
					<div className="longInput mx-auto my-3">
						<input name = "email" type="text" maxLength={32} required />
						<label>E_mail(32)</label>
					</div>
					
					<div className="longInput mx-auto my-3">
						<input name = "birth" type="text" maxLength={16} />
						<label>Birth_Day(16)</label>
					</div>
					
					<button id="registerButton">Register</button>
				</form>
			</div>
		</div>
	);
}

export default Reg;
