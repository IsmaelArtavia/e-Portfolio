import React, { useState } from "react";

const Animation = () => {
	return (
		<div>
			<div className="text-center">
				<div className="spinner-border text-primary" role="status">
					<div className="spinner-grow text-primary" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
							<div className="spinner-border m-5" role="status">
								<div className="spinner-border m-5 text-info" role="status">
									<div className="spinner-border spinner-border-sm text-danger" role="status">
										<div className="spinner-grow spinner-grow-sm text-info" role="status"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="spinner-border m-5 text-warning" role="status"></div>
					<div className="spinner-border spinner-border-sm text-dark" role="status">
						<div className="spinner-grow text-primary" role="status">
							<div className="spinner-grow spinner-grow-sm text-success" role="status"></div>

							{/* spin de mas afuera */}
						</div>
					</div>
				</div>
				{/* segundo circulo color gris */}
				<div className="spinner-border text-secondary" role="status">
					<div className="spinner-grow text-secondary" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-success" role="status">
					<div className="spinner-grow text-success" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-danger" role="status">
					<div className="spinner-grow text-danger" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-warning" role="status">
					<div className="spinner-grow text-warning" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-info" role="status">
					<div className="spinner-grow text-info" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-light" role="status">
					<div className="spinner-grow text-light" role="status">
						<div className="spinner-border spinner-border-sm text-dark" role="status">
							<div className="spinner-grow spinner-grow-sm text-dark" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-dark" role="status">
					<div className="spinner-grow text-dark" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<br></br>

				<div className="spinner-border" role="status">
					{" "}
					<div className="spinner-grow" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<br></br>
				<div className="spinner-border" role="status">
					{" "}
					<div className="spinner-grow" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<br></br>
				<div className="spinner-border" role="status">
					{" "}
					<div className="spinner-grow" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<br></br>
				<div className="spinner-border" role="status">
					{" "}
					<div className="spinner-grow" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<br></br>
				<div className="spinner-border text-primary" role="status">
					<div className="spinner-grow text-primary" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-secondary" role="status">
					<div className="spinner-grow text-secondary" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-success" role="status">
					<div className="spinner-grow text-success" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-danger" role="status">
					<div className="spinner-grow text-danger" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-warning" role="status">
					<div className="spinner-grow text-warning" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-info" role="status">
					<div className="spinner-grow text-info" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-light" role="status">
					<div className="spinner-grow text-light" role="status">
						<div className="spinner-border spinner-border-sm text-dark" role="status">
							<div className="spinner-grow spinner-grow-sm text-dark" role="status"></div>
						</div>
					</div>
				</div>
				<div className="spinner-border text-dark" role="status">
					<div className="spinner-grow text-dark" role="status">
						<div className="spinner-border spinner-border-sm text-light" role="status">
							<div className="spinner-grow spinner-grow-sm text-light" role="status"></div>
						</div>
						<div className="spinner-border text-success" role="status">
							<div className="spinner-grow text-success" role="status">
								<div className="spinner-border spinner-border-sm text-light" role="status"></div>
								<div className="spinner-border text-info" role="status">
									<div className="spinner-grow text-danger" role="status"></div>
								</div>
							</div>
							<div className="spinner-border spinner-border-sm text-warning" role="status">
								<div className="spinner-grow spinner-grow-sm text-dark" role="status"></div>{" "}
								<div className="spinner-border text-primary" role="status"></div>
							</div>
							<div className="spinner-grow text-danger" role="status"></div>
							<div className="spinner-grow text-secondary" role="status"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Animation;
