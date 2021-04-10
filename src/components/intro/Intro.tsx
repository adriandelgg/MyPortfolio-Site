import React from 'react';
import './intro.css';

import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Socials from '../Socials';
import ChatIcon from '@material-ui/icons/Chat';

const Intro = () => {
	const intro = 'animate__animated animate__fadeInDown';
	return (
		<section className="intro-section">
			<h1 className="intro-greeting animate__animated animate__fadeIn">
				Hello, my name is
			</h1>
			<h2 className="intro-name animate__animated animate__rollIn">
				Adrian Delgado.
			</h2>
			<h3 className="intro-web-dev animate__animated animate__fadeInUp">
				I'm a &lt; Web Developer /&gt;.
			</h3>
			<p className="intro-paragraph animate__animated animate__fadeInUp">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
				veniam et autem architecto quis facilis nam animi culpa fugit nulla
				deserunt molestias ex esse vero sunt facere dolores, sit odit.
			</p>
			<div className="intro-socials">
				<Socials intro={intro} />
			</div>
			<Button
				className="intro-btn"
				href="mailto:adriandelgado.tech@gmail.com"
				variant="outlined"
				color="primary"
				endIcon={<ChatIcon />}
			>
				Get in Touch
			</Button>
		</section>
	);
};

export default Intro;
