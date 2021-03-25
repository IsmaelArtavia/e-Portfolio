import React from "react";
import "../../styles/actionPlan.scss";

const ActionPlan = () => {
	return (
		<div>
			<h1>SMART Goal WorkSheet</h1>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">No pain, no gain</th>
						<th scope="col">Goal in Mind</th>
						<th scope="col">Speak English</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>
							<i className="fab fa-stripe-s" />
						</th>
						<th scope="row">Is it Specific?</th>
						<td>Hit the nail on the head</td>
					</tr>
					<tr>
						<th scope="row">
							{" "}
							<strong>M</strong>
						</th>
						<td>Is it Measurable?</td>
						<td>You can say that again</td>
					</tr>
					<tr>
						<th scope="row">
							<i className="fab fa-autoprefixer" />
						</th>
						<td>Is it Attainable?</td>
						<td>Yes, No pain, no gain</td>
					</tr>
					<tr>
						<th scope="row">
							<i className="fas fa-registered" />
						</th>
						<td>Is it Relevant?</td>
						<td>The horse of course</td>
					</tr>
					<tr>
						<th scope="row">
							<i className="fab fa-tumblr" />
						</th>
						<td>It is Timely?</td>
						<td>The best thing since sliced bread</td>
					</tr>
					<tr>
						<th scope="row">SMART Goal</th>
						<td>Become a Bilingual</td>
						<td>As right as rain</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ActionPlan;
