import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Intro />
				<AboutMe />
				<Projects />
			</main>
		</>
	);
};

export default App;
