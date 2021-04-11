import React from 'react';
import './intro.css';

import { Button } from '@material-ui/core';
import Socials from '../../helper/Socials';
import ChatIcon from '@material-ui/icons/Chat';
import { Animated } from 'react-animated-css';

const Intro = () => {
	return (
		<section className="intro-section">
			<h1 className="intro-greeting animate__animated animate__fadeIn">
				Hello, my name is
			</h1>
			<Animated
				animationIn="rollIn"
				animationOut="rollOut"
				animationInDuration={800}
				animationOutDuration={800}
				isVisible={true}
			>
				<h2 className="intro-name">Adrian Delgado.</h2>
			</Animated>
			<h3 className="intro-web-dev animate__animated animate__fadeInUp">
				I'm a &lt; Web Developer /&gt;.
			</h3>
			<p className="intro-paragraph animate__animated animate__fadeInUp">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
				veniam et autem architecto quis facilis nam animi culpa fugit nulla
				deserunt molestias ex esse vero sunt facere dolores, sit odit.
			</p>
			<div className="intro-socials">
				<Socials />
			</div>
			<Button
				className="intro-btn"
				href="mailto:adriandelgado.tech@gmail.com"
				variant="outlined"
				color="primary"
				endIcon={<ChatIcon />}
			>
				Let's chat!
			</Button>
		</section>
	);
};

export default Intro;
