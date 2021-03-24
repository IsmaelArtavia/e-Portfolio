import React from "react";
import "../../styles/jumbotron.scss";
import { Link } from "react-router-dom";

const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div id="particle-container">
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />
				<div className="particle" />

				<h1 className="display-4">Hello, My Name is Ismael Artavia Jimenez</h1>
				<p className="lead">English student from Skills4Life</p>
				<hr className="my-4" />
				<p>If you want to contact me, press the bottom below</p>
				<p className="lead">
					<Link to="/Contact">
						<button className="btn btn-primary">Contact</button>
					</Link>
					<Link to="/CV">
						<button className="btn btn-warning">CV</button>
					</Link>
					<Link to="/AboutMe">
						<button className="btn btn-danger">About Me</button>
					</Link>
					<Link to="/SWOT">
						<button className="btn btn-success">SWOT</button>
					</Link>
					<Link to="/ActionPlan">
						<button className="btn btn-dark">Action Plan</button>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;
