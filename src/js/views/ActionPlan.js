import React from "react";
import "../../styles/actionPlan.scss";

const ActionPlan = () => {
	return (
		<div>
			<h1>SMART Goal WorkSheet</h1>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">SMART</th>
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
						<td>Hit the nail on the head (yes, Study English)</td>
					</tr>
					<tr>
						<th scope="row">
							{" "}
							<strong>M</strong>
						</th>
						<td>Is it Measurable?</td>
						<td>You can say that again (yes,every month)</td>
					</tr>
					<tr>
						<th scope="row">
							<i className="fab fa-autoprefixer" />
						</th>
						<td>Is it Attainable?</td>
						<td>Yes, No pain, no gain (yes,Skill4Life)</td>
					</tr>
					<tr>
						<th scope="row">
							<i className="fas fa-registered" />
						</th>
						<td>Is it Relevant?</td>
						<td>The horse of course (yes, help me to get a job)</td>
					</tr>
					<tr>
						<th scope="row">
							<i className="fab fa-tumblr" />
						</th>
						<td>It is Timely?</td>
						<td>The best thing since sliced bread (yes I will finish this year)</td>
					</tr>
					<tr>
						<th scope="row">SMART Goal</th>
						<td>Become a Bilingual</td>
						<td>As right as rain (excellent)</td>
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
