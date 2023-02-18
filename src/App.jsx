import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyMenu from "./components/Menu/Menu";
import Skills from "./components/Skills/Skills";
import { useState } from "react";
import { ConfigProvider, theme, Button, Card } from "antd";

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

const Projects = () => {
	return (
		<div>
			<h1>Witaj na stronie z projektami!</h1>
		</div>
	);
};
const Contact = () => {
	return (
		<div>
			<h1>Witaj na stronie z informacjami kontaktowymi!</h1>
		</div>
	);
};

const App = () => {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleClick = () => {
		setIsDarkMode((previousValue) => !previousValue);
	};
	return (
		<>
			<ConfigProvider
				theme={{
					algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
				}}
			>
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
								path="/contact"
								element={<Contact />}
							/>
						</Routes>
						<Card style={{ width: "max-content" }}>
							<Button onClick={handleClick}>
								Change Theme to {isDarkMode ? "Light" : "Dark"}
							</Button>
						</Card>
					</div>
				</Router>
			</ConfigProvider>
		</>
	);
};

export default App;
