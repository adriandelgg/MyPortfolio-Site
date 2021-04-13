import React from 'react';
import './intro.css';

import Socials from '../../helper/Socials';
import ButtonMail from './Button';

const Intro = () => {
	return (
		<section className="intro-section">
			<h1 className="intro-greeting">Hello, my name is</h1>
			<h2 className="intro-name">Adrian Delgado.</h2>
			<h3 className="intro-web-dev">
				<span className="web-dev">&lt;Web Developer/&gt;</span>
			</h3>
			<p className="intro-paragraph">
				My dream is to create something that's going to impact the world
				forever. I enjoy bringing ideas to life, and creating elegant,
				minimalist, and professional websites.
			</p>
			<div className="intro-socials">
				<Socials />
			</div>
			<ButtonMail />
		</section>
	);
};

export default Intro;
