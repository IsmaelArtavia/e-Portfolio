import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Opportunities.scss";

const Opportunities = () => {
	return (
		<div className="Opportunities">
			<h1>
				Opportunities <i className="fas fa-paper-plane" />
			</h1>
			<br></br> <br></br>
			<p>
				Second language: I need to speak a second language for my work area. <br></br> <br></br>
				Learn about technology: I must learn more about technology. <br></br> <br></br>
				Government scholarships: use all government benefits. <br></br> <br></br>
				Change the work paradigm because Covid 19: work from home is a benefit<br></br> <br></br>
				Reinvent itself: learn more about other areas and maybe work in other fields <br></br> <br></br>
				Take courses in other areas: open my mind to other areas<br></br> <br></br>
				Learn new things (cook): I did not know that I liked to cook <br></br> <br></br>
				Adapt itself: thinking about to doing my own business.<br></br> <br></br>
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

export default Opportunities;
