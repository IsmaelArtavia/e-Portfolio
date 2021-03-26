import React from "react";
import "../..//styles/SWOT.scss";
import { Link } from "react-router-dom";

const SWOT = () => {
	return (
		<div className="container">
			<section className="section-plans" id="section-plans">
				<div className="u-center-text u-margin-bottom-big">
					<h2 className="heading-secondary">strengths and Weaknesses</h2>
				</div>

				<div className="row">
					<div className="col">
						<div className="card">
							<div className="card__side card__side--front-1">
								<div className="card__title card__title--1">
									<i className="fas fa-dumbbell" />

									<h3 className="card__heading">Strengths</h3>
								</div>

								<div className="card__details">
									<h3>
										What do you do well? <br />
										What unique resources can you draw on?
										<br />
										What do others see as your strengths?
									</h3>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-1">
								<div className="card__cta">
									<div className="card__price-box">
										<i className="fas fa-dumbbell" />
										<h3 className="card__heading">Strengths</h3>
										<p className="card__price-only">
											<h3>
												Perseverance <br />
												Curiosity and willingness to learn <br />
												Teamwork <br />
												Analytical thinking <br />
												Honesty <br />
												Commitment <br />
												Responsibility <br />
												Discipline <br />
											</h3>
										</p>
									</div>
									<Link to="/">
										<button className="btn btn-primary">Go Home</button>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="col">
						<div className="card">
							<div className="card__side card__side--front-2">
								<div className="card__title card__title--2">
									<i className="fas fa-unlink" />
									<h3 className="card__heading"> WEAKNESSES</h3>
								</div>

								<div className="card__details">
									<h3>
										What could you improve? <br />
										Where do you have fewer resources than others?
										<br />
										What are others likely to see as weaknesses?
									</h3>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-2">
								<div className="card__cta">
									<div className="card__price-box">
										<i className="fas fa-unlink" />
										<h3 className="card__heading">WEAKNESSES</h3>
										<p className="card__price-only">
											<h3>
												Impatience <br />
												Fear of the future <br />
												Pessimism <br />
												Unsafety
												<br />
												Inferiority complex <br />
												Incomplete studies <br />
												Destructive self-criticism
												<br />
												Speak English
												<br />
												Soft skills
											</h3>
										</p>
									</div>
									<Link to="/">
										<button className="btn btn-primary">Go Home</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-plans" id="section-plans">
				<div className="u-center-text u-margin-bottom-big">
					<h2 className="heading-secondary">Opportunities And Threats</h2>
				</div>

				<div className="row">
					<div className="col">
						<div className="card">
							<div className="card__side card__side--front-1">
								<div className="card__title card__title--1">
									<i className="fas fa-paper-plane" />
									<h3 className="card__heading">Opportunities</h3>
								</div>

								<div className="card__details">
									<h3>
										What opportunities are open to you? <br />
										What trends could you take advantage of? <br />
										How can you turn your strengths into opportunities?
									</h3>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-1">
								<div className="card__cta">
									<div className="card__price-box">
										<i className="fas fa-paper-plane" />
										<h3 className="card__heading">Opportunities</h3>
										<p className="card__price-only">
											<h3>
												Second language <br />
												Learn about technology
												<br />
												Government scholarships
												<br />
												Change the work paradigm because Covid 19 <br />
												Reinvent itself
												<br />
												Take courses in other areas
												<br />
												Learn new things (cook) <br />
												Adapt itself <br />
												Skills4Life
											</h3>
										</p>
									</div>
									<Link to="/">
										<button className="btn btn-primary">Go Home</button>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="col">
						<div className="card">
							<div className="card__side card__side--front-2">
								<div className="card__title card__title--2">
									<i className="fas fa-bolt" />
									<h4 className="card__heading">Threats</h4>
								</div>

								<div className="card__details">
									<h3>
										What threats do you think could harm you in any way? <br />
										What threats do you think your weaknesses expose to you?
									</h3>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-2">
								<div className="card__cta">
									<div className="card__price-box">
										<i className="fas fa-bolt" />
										<h3 className="card__heading">Threats</h3>
										<p className="card__price-value">
											<h3>
												Third language <br />
												Certifications <br />
												People with more knowledge <br />
												Age
												<br />
												More languages
												<br />
												Soft skills <br />
												Knowledge update <br />
												Sell me as a programmer <br />
												University complete
											</h3>
										</p>
									</div>
									<Link to="/">
										<button className="btn btn-primary">Go Home</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SWOT;
