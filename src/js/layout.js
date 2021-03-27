import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Jumbotron from "../js/views/jumbotron";
import Principal from "../js/views/Principal";
import CV from "../js/views/CV";
import Contact from "../js/views/Contact";
import AboutMe from "../js/views/AboutMe";
import SWOT from "../js/views/SWOT";
import ActionPlan from "../js/views/ActionPlan";
import Animation from "../js/views/animation";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />

					<Switch>
						<Route exact path="/">
							<Jumbotron />
							<Home />
							<Principal></Principal>
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/Contact">
							<Contact />
						</Route>
						<Route exact path="/CV">
							<CV />
						</Route>
						<Route exact path="/AboutMe">
							<AboutMe />
						</Route>
						<Route exact path="/SWOT">
							<SWOT />
						</Route>
						<Route exact path="/ActionPlan">
							<ActionPlan />
						</Route>
						<Route exact path="/animation">
							<Animation />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
