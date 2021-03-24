import React from "react";
import "../../styles/Contact.scss";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<div className="card">
			<div className="card-header">Junior Full Stack Development</div>
			<div className="card-body">
				<h5 className="card-title">Email: ismaelartavia@yahoo.es</h5>
				<p className="card-text">Phone number: 21010619</p>
				<p className="card-text">Social media:</p>

				<ul>
					<li>
						<a href="https://github.com/IsmaelArtavia" target="_blank" rel="noopener noreferrer">
							<span />
							<span />
							<span />
							<span />
							<span className="fa fa-github" />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/ismael-artavia-1746b0185/"
							target="_blank"
							rel="noopener noreferrer">
							<span />
							<span />
							<span />
							<span />
							<span className="fa fa-linkedin" />
						</a>
					</li>
				</ul>
				<Link to="/">
					<button className="btn btn-primary">Return</button>
				</Link>
			</div>
		</div>
	);
};

export default Contact;
