import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import fullStack from "../../img/Full_Stack.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<p>
			<img className="imagen" src={fullStack} />
		</p>
	</div>
);
