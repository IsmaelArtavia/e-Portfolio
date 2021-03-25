import React from "react";
import CSS from "../../img/css.jpg";
import Descarga from "../../img/descarga.jpg";
import FixComputer from "../../img/fixcomputer.jpg";
import Flask from "../../img/flask.jpg";
import Git from "../../img/git.jpg";
import Html from "../../img/html.jpg";
import Js from "../../img/js.jpg";
import GitHub from "../../img/github.jpg";
import Linux from "../../img/linux.jpg";
import Mysql from "../../img/mysql.jpg";
import Postgresql from "../../img/postgreslql.jpg";
import React1 from "../../img/react.jpg";
import Scrum from "../../img/scrum.jpg";
import Win from "../../img/windows10.jpg";
import Phython from "../../img/python.jpg";
import NodeJs from "../../img/nodejs.jpg";
import "../../styles/aboutMe.scss";

const AboutMe = () => {
	return (
		<div className="list-group">
			<a href="#" className="list-group-item list-group-item-action active" aria-current="true">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">About me</h5>
				</div>
			</a>
			<a href="#" className="list-group-item list-group-item-action list-group-item-danger">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">
						I am a computer engineering student and Math teacher, my hunger for knowledge is so big, I need
						to know more and more about technology, internet, programming and logic. I like math and
						computers, ride my bike and logic video games. I am junior full stack development, more than 5
						years experience in IT, I worked resolving problems, I like to know how the things works and get
						the solution to different problems. Not only that, but I taught math for more than 15 years, I
						love working with numbers, resolved logical problems and teaching. My favorite part of
						programming is front end, because I can see it, I need to see the webpage, do experiments with
						the code, learn new technologies is my slogan, never stop even if you are thinking.
					</h5>
				</div>
			</a>
			<a href="#" className="list-group-item list-group-item-action list-group-item-warning">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">
						For me the math and computing change the world, don’t be afraid the math, the technology
						fast-forward, is very import to be updated in technology, never stop learning, today is very
						necessary to know about technology, in special in area like IT.{" "}
					</h5>
				</div>
			</a>

			<a href="#" className="list-group-item list-group-item-action list-group-item-success">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">
						The Webpages evolve very fast, I am junior full stack development become a master full stack
						development someday, but in this Area you must always learn, know how to search on the internet,
						use correctly Google search, commands, read a lot of documentation, many programmers don’t like
						to read the documentation but is a very import task before starting to code.
					</h5>
				</div>
			</a>
			<a href="#" className="list-group-item list-group-item-action list-group-item-primary">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">
						The technology Area is so vast, and you never know everything, your knowledge is a drop of sweet
						water in a sea, but is so import to join the all drops of sweet water to make an ocean and the
						world go a better place.
					</h5>
				</div>
			</a>
			<a href="#" className="llist-group-item list-group-item-action list-group-item-warning">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">
						The education is the best way to change the world, every teacher is an oasis of hope to the
						students, and the base of the society are the teachers, for the Japanese culture the teacher is
						the only person do not bend down in front of the emperor, because of a society without teachers
						and education is nothing. The programmers know that all life is a constant learning.
					</h5>
				</div>
			</a>
			<a href="#" className="list-group-item list-group-item-action list-group-item-info">
				<div className="d-flex w-100 justify-content-between">
					<h5 className="mb-1">
						Sorry for express my thinking about education, but the best way to know me knows my form of
						thinking and maybe teach to you something, or you stay thinking about this, is gold for me.
					</h5>
				</div>
			</a>
			<br />
			<p>
				<h1>Skills:</h1>
			</p>
			<p>
				<img className="img1" src={CSS} />
				<img className="img1" src={Descarga} />
				<img className="img1" src={FixComputer} />
				<img className="img1" src={Flask} />
				<img className="img1" src={Git} />
				<img className="img1" src={Js} />
				<img className="img1" src={Html} />

				<br />
				<img className="img1" src={Mysql} />
				<img className="img1" src={Linux} />
				<img className="img1" src={Postgresql} />
				<img className="img1" src={React1} />
				<img className="img1" src={Scrum} />
				<img className="img1" src={Win} />
				<img className="img1" src={Phython} />
			</p>
		</div>
	);
};

export default AboutMe;
