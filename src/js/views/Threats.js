import React from "react";
import { Link } from "react-router-dom";
const Threats = () => {
	return (
		<div>
			<h1>
				Opportunities <i className="fas fa-bolt" />
			</h1>
			<br></br> <br></br>
			<p>
				Third language: today learn Portuguese is necessary to work in technology <br></br> <br></br>
				Certifications: I need some certification to specialize. <br></br> <br></br>
				People with more knowledge: some people always know more than you <br></br> <br></br>
				Age: I’m 38 years old, some companies prefer a young person.<br></br> <br></br>
				More languages: polyglot people are very attracted to companies. <br></br> <br></br>
				Soft skills: the companies evaluate the soft skills<br></br> <br></br>
				Knowledge update: The update is necessary in the technology area <br></br> <br></br>
				Sell me as a programmer: I need to sell myself as a programmer<br></br> <br></br>
				University complete: finish the University is very important to me<br></br> <br></br>
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
export default Threats;
