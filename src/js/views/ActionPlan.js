import React from "react";
import "../../styles/actionPlan.scss";

const ActionPlan = () => {
	return (
		<div>
			<div className="ripple-background">
				<div className="circle xxlarge shade1"></div>
				<div className="circle xlarge shade2"></div>
				<div className="circle large shade3"></div>
				<div className="circle mediun shade4"></div>
				<div className="circle small shade5"></div>
			</div>
			<h1>SMART Goal WorkSheet</h1>
			<table className="table table-hover ">
				<thead>
					<tr className="table-warning">
						<th scope="col">SMART</th>
						<th scope="col">Goal in Mind</th>
						<th scope="col">Speak English</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th className="table-danger">
							<i className="fab fa-stripe-s" />
						</th>
						<th scope="row" className="table-primary">
							Is it Specific?
						</th>
						<td className="table-success">Hit the nail on the head (yes, Study English)</td>
					</tr>
					<tr>
						<th scope="row" className="table-success">
							{" "}
							<strong>M</strong>
						</th>
						<td className="table-danger">Is it Measurable?</td>
						<td className="table-primary">You can say that again (yes,every month)</td>
					</tr>
					<tr>
						<th scope="row" className="table-primary">
							<i className="fab fa-autoprefixer" />
						</th>
						<td className="table-success">Is it Attainable?</td>
						<td className="table-danger">Yes, No pain, no gain (yes,Skill4Life)</td>
					</tr>
					<tr>
						<th scope="row" className="table-danger">
							<i className="fas fa-registered" />
						</th>
						<td className="table-primary">Is it Relevant?</td>
						<td className="table-success">The horse of course (yes, help me to get a job)</td>
					</tr>
					<tr>
						<th scope="row" className="table-success">
							<i className="fab fa-tumblr" />
						</th>
						<td className="table-danger">It is Timely?</td>
						<td className="table-primary">
							The best thing since sliced bread (yes I will finish this year)
						</td>
					</tr>
					<tr>
						<th scope="row" className="table-primary">
							SMART Goal
						</th>
						<td className="table-success">Become a Bilingual</td>
						<td className="table-danger">As right as rain (excellent)</td>
					</tr>
				</tbody>
			</table>

			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.ef.com/wwen/english-resources/english-idioms/">
				English idioms Link
			</a>
		</div>
	);
};

export default ActionPlan;
