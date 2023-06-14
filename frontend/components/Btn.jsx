import React from "react";
import { useState } from "react";

function Btn() {
	const [count, setCount] = useState(0);
	const myFun = () => setCount(count + 1);
	const myFun1 = () => setCount(count - 1);

	return (
		<div>
			<button
				type="button"
				className="btn btn-warning "
				style={{ backgroundColor: "rgb(255, 144, 0)" }}
				onClick={myFun1}>
				-
			</button>
			<input
				type="text"
				style={{ width: "50px", fontWeight: "300px" }}
				value={count}
				className="form-control bg-secondary text-light text-center fs-2"
			/>
			<button
				type="button"
				className="btn btn-warning "
				style={{ backgroundColor: "rgb(255, 144, 0)" }}
				onClick={myFun}>
				+
			</button>
		</div>
	);
}

export default Btn;
