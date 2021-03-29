import React from "react";
import "../../styles/Strengths.scss";

import { Link } from "react-router-dom";
const Strengths = () => {
	return (
		<div className="Strenghs">
			<h1>
				Strengths <i className="fas fa-dumbbell" />
			</h1>
			<br></br> <br></br>
			<p>
				Perseverance: I am very persistent <br></br> <br></br>
				Curiosity and willingness to learn: I like to know how works the things <br></br> <br></br>
				Teamwork: I work so good with other people <br></br> <br></br>
				Analytical thinking: I prefer first analyze the problem before obtained the answer <br></br> <br></br>
				Honesty: is very important to me tell the truth <br></br> <br></br>
				Commitment: give it all is my way Responsibility: I am the owner of my duties.<br></br> <br></br>
				Discipline: I work so hard to get all my goals. <br></br> <br></br>
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

export default Strengths;
