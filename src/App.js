import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyMenu from "./components/Menu/Menu";

const Home = () => {
	const handleButtonClick = (event) => {
		window.scrollTo(0, 0);
	};

	return (
		<div>
			<h1>Witaj na stronie głównej!</h1>
			<button onClick={handleButtonClick}>Przewiń na górę</button>
		</div>
	);
};

const Skills = () => {
	const handleButtonClick = (event) => {
		window.scrollTo(0, 0);
	};

	return (
		<div>
			<h1>Witaj na stronie z umiejętnościami!</h1>
			<button onClick={handleButtonClick}>Przewiń na górę</button>
		</div>
	);
};

const Projects = () => {
	const handleButtonClick = (event) => {
		window.scrollTo(0, 0);
	};

	return (
		<div>
			<h1>Witaj na stronie z projektami!</h1>
			<button onClick={handleButtonClick}>Przewiń na górę</button>
		</div>
	);
};
const AboutMe = () => {
	const handleButtonClick = (event) => {
		window.scrollTo(0, 0);
	};

	return (
		<div>
			<h1>Witaj na stronie o mnie!</h1>
			<button onClick={handleButtonClick}>Przewiń na górę</button>
		</div>
	);
};

const App = () => {
	return (
		<Router>
			<div>
				<MyMenu />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/skills"
						element={<Skills />}
					/>
					<Route
						path="/projects"
						element={<Projects />}
					/>
					<Route
						path="/about"
						element={<AboutMe />}
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default App;
