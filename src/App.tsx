import React from 'react';
import './App.css';
import 'animate.css';

import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';

const App = () => {
	return (
		<>
			<Header />
			<main id="main">
				<Intro />
				{/* <AboutMe /> */}
				<Skills />
				<Projects />
			</main>
			<Footer />
		</>
	);
};

export default App;
