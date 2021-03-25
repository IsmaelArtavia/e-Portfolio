import React from "react";
import "../..//styles/SWOT.scss";

const SWOT = () => {
	return (
		<div className="container">
			<section className="section-plans" id="section-plans">
				<div className="u-center-text u-margin-bottom-big">
					<h2 className="heading-secondary">Hosting Plans</h2>
				</div>

				<div className="row">
					<div className="col">
						<div className="card">
							<div className="card__side card__side--front-1">
								<div className="card__title card__title--1">
									<i className="fas fa-dumbbell" />

									<h4 className="card__heading">Strengths</h4>
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
										<h4 className="card__heading">Strengths</h4>

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
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col">
						<div className="card">
							<div className="card__side card__side--front-2">
								<div className="card__title card__title--2">
									<i className="fas fa-plane" />
									<h4 className="card__heading">Plus</h4>
								</div>

								<div className="card__details">
									<ul>
										<li>Includes Basic Package Features</li>
										<li>Unlimited Websites</li>
										<li>Unlimited SSD Storage</li>
										<li>Unlimited Domains</li>
										<li>Unlimited Parked Domains</li>
										<li>Unlimited Sub Domains</li>
									</ul>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-2">
								<div className="card__cta">
									<div className="card__price-box">
										<p className="card__price-only">Only</p>
										<p className="card__price-value">$5.45/mo*</p>
									</div>
									<a href="#popup" className="btn btn--white">
										Select
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-plans" id="section-plans">
				<div className="u-center-text u-margin-bottom-big">
					<h2 className="heading-secondary">Hosting Plans</h2>
				</div>

				<div className="row">
					<div className="col">
						<div className="card">
							<div className="card__side card__side--front-1">
								<div className="card__title card__title--1">
									<i className="fas fa-paper-plane" />
									<h4 className="card__heading">Basic</h4>
								</div>

								<div className="card__details">
									<ul>
										<li>1 Website</li>
										<li>50 GB SSD Storage</li>
										<li>Unmetered Bandwidth</li>
										<li>Free SSL Certificate</li>
										<li>1 Included Domain</li>
										<li>1 Included Domain</li>
									</ul>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-1">
								<div className="card__cta">
									<div className="card__price-box">
										<p className="card__price-only">Only</p>
										<p className="card__price-value">$2.95/mo*</p>
									</div>
									<a href="#popup" className="btn btn--white">
										Select
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col">
						<div className="card">
							<div className="card__side card__side--front-2">
								<div className="card__title card__title--2">
									<i className="fas fa-plane" />
									<h4 className="card__heading">Plus</h4>
								</div>

								<div className="card__details">
									<ul>
										<li>Includes Basic Package Features</li>
										<li>Unlimited Websites</li>
										<li>Unlimited SSD Storage</li>
										<li>Unlimited Domains</li>
										<li>Unlimited Parked Domains</li>
										<li>Unlimited Sub Domains</li>
									</ul>
								</div>
							</div>
							<div className="card__side card__side--back card__side--back-2">
								<div className="card__cta">
									<div className="card__price-box">
										<p className="card__price-only">Only</p>
										<p className="card__price-value">$5.45/mo*</p>
									</div>
									<a href="#popup" className="btn btn--white">
										Select
									</a>
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
