import React from "react";
import "../../styles/Weaknesses.scss";

import { Link } from "react-router-dom";
const Waknesses = () => {
	return (
		<div className="Weaknesses">
			<h1>
				Weaknesses <i className="fas fa-unlink" />
			</h1>
			<br></br> <br></br>
			<p>
				Impatience: I think the time is my enemy, I need more time to do that <br></br> <br></br>
				Fear of the future: I am always thinking about my future. <br></br> <br></br>
				Pessimism: Sometimes I am so negative about myself <br></br> <br></br>
				Unsafety: I do not feel comfortable about my future<br></br> <br></br>
				Incomplete studies: I need to finish my career. <br></br> <br></br>
				Speak English: Speak fluently, clearly and quickly.<br></br> <br></br>
				Soft skills: I must improve my soft skills. <br></br> <br></br>
			</p>
			<Link to="/">
				<button className="btn btn-primary">Go Home</button>
			</Link>
			<Link to="/SWOT">
				<button className="btn btn-warning">Go SWOT</button>
			</Link>
		</div>
	);
};

export default Waknesses;
