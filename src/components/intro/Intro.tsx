import React from 'react';
import './intro.css';

import Socials from '../../helper/Socials';
import { Button } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';

const Intro = () => {
	return (
		<section className="intro-section">
			<h1 className="intro-greeting">Hello, my name is</h1>
			<h2 className="intro-name">Adrian Delgado.</h2>
			<h3 className="intro-web-dev">
				I'm a <span className="web-dev">&lt;Web Developer/&gt;</span>.
			</h3>
			<p className="intro-paragraph">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
				veniam et autem architecto quis facilis nam animi culpa fugit nulla
				deserunt molestias ex esse vero sunt facere dolores, sit odit.
			</p>
			<div className="intro-socials">
				<Socials />
			</div>
			{/* <Button
				className="intro-btn"
				href="mailto:adriandelgado.tech@gmail.com"
				variant="outlined"
				color="primary"
				endIcon={<ChatIcon />}
			>
				Let's chat!
			</Button> */}
			{/* <button className="intro-btn">Let's chat! {<ChatIcon />}</button> */}
		</section>
	);
};

export default Intro;
