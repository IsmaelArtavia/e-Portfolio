import React from "react";
import "../../styles/Contact.scss";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";

const Contact = () => {
	return (
		<div className="container-fluid big-container">
			<Particles
				id="tsparticles"
				options={{
					background: {
						color: {
							value: "rgb(235, 169, 238);"
							//rgb(4, 29, 46);
						}
					},
					fpsLimit: 60,
					interactivity: {
						detectsOn: "canvas",
						events: {
							onClick: {
								enable: true,
								mode: "push"
							},
							onHover: {
								enable: true,
								mode: "repulse"
							},
							resize: true
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40
							},
							push: {
								quantity: 4
							},
							repulse: {
								distance: 200,
								duration: 0.4
							}
						}
					},
					particles: {
						color: {
							value: "#ffffff"
						},
						links: {
							color: "#ffffff",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1
						},
						collisions: {
							enable: true
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 3,
							straight: false
						},
						number: {
							density: {
								enable: true,
								value_area: 800
							},
							value: 80
						},
						opacity: {
							value: 0.5
						},
						shape: {
							type: "circle"
						},
						size: {
							random: true,
							value: 5
						}
					},
					detectRetina: true
				}}
			/>
			<div className=" card position-absolute top-100 start-200 translate-middle card-container">
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
		</div>
	);
};

export default Contact;
