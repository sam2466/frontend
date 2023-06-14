// import React from "react";
import { Link } from "react-router-dom";
import "../style/login.css";
import { useState } from "react";
import Fapi from "../API/Fapi";

function Log() {
	const [account,setAccount]= useState();
	const [password,setPassword]= useState();


	return (
		<div className="main">
			<div className="login">
				<h2>Login</h2>

				<div className="input">
					<input	name = "account" 
							type="text" 
							value={account} 
							onChange = {	
									(e) => {
										e.stopPropagation();
										setAccount(e.currentTarget.value);
									}
								} 
							required 
					/>
					<label>Account</label>
				</div>
				
				<div className="input">
					<input	name = "password" 
							type="password" 
							value={password} 
							onChange = {	
								(e) => {
									e.stopPropagation();
									setPassword(e.currentTarget.value);
								}
							} 
							required 
					/>
					<label>Password</label>
				</div>
				
				<button id="loginButton" 
						onClick={
							(e) => {
								e.stopPropagation();
								console.log({account, password});
								Fapi.isLogin(account, password).then((result) => {
									console.log(result);
								});
							}
						}>
					Login
				</button>
				
				<div className="toRegister">
					<Link to = "/register">
						<h3 href="#">Register</h3>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Log;
