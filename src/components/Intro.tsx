import React from 'react';
import { Button } from '@material-ui/core';
import gitHub from '../img/github.svg';
import linkedIn from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';
import instagram from '../img/instagram.svg';

const Intro = () => {
	return (
		<>
			<h1>Hello, my name is</h1>
			<h2>Adrian Delgado</h2>
			<h3>&lt; Front-End Web Developer /&gt;</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
				veniam et autem architecto quis facilis nam animi culpa fugit nulla
				deserunt molestias ex esse vero sunt facere dolores, sit odit.
			</p>
			<Button
				href="mailto:adriandelgado.tech@gmail.com"
				variant="outlined"
				color="primary"
				endIcon=""
			>
				Get in Touch
			</Button>
			<a
				href="https://github.com/adriandelgg"
				target="_blank"
				rel="noreferrer"
			>
				<img src={gitHub} alt="GitHub" />
			</a>
			<a
				href="https://www.linkedin.com/in/adriandelgado1/"
				target="_blank"
				rel="noreferrer"
			>
				<img src={linkedIn} alt="LinkedIn" />
			</a>
			<a
				href="https://www.instagram.com/cloudcoding/"
				target="_blank"
				rel="noreferrer"
			>
				<img src={instagram} alt="Instagram" />
			</a>
			<a
				href="https://twitter.com/cloudcoding_"
				target="_blank"
				rel="noreferrer"
			>
				<img src={twitter} alt="Twitter" />
			</a>
		</>
	);
};

export default Intro;
