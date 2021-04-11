import React from 'react';

import gitHub from '../img/github.svg';
import linkedIn from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';
import instagram from '../img/instagram.svg';

import { Animated } from 'react-animated-css';

const Socials = () => {
	return (
		<>
			<a
				href="https://github.com/adriandelgg"
				target="_blank"
				rel="noreferrer"
			>
				<Animated
					animationIn="rollIn"
					animationOut="rollOut"
					animationInDuration={800}
					animationOutDuration={800}
					isVisible={true}
				>
					<img src={gitHub} alt="GitHub" />
				</Animated>
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

export default Socials;
