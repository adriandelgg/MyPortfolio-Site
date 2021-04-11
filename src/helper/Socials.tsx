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
					animationInDelay={1000}
					animationIn="fadeInDown"
					animationOut="fadeOutUp"
					animationInDuration={1000}
					animationOutDuration={1000}
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
				<Animated
					animationInDelay={1200}
					animationIn="fadeInDown"
					animationOut="fadeOutUp"
					animationInDuration={1000}
					animationOutDuration={1000}
					isVisible={true}
				>
					<img src={linkedIn} alt="LinkedIn" />
				</Animated>
			</a>
			<a
				href="https://www.instagram.com/cloudcoding/"
				target="_blank"
				rel="noreferrer"
			>
				<Animated
					animationInDelay={1400}
					animationIn="fadeInDown"
					animationOut="fadeOutUp"
					animationInDuration={1000}
					animationOutDuration={1000}
					isVisible={true}
				>
					<img src={instagram} alt="Instagram" />
				</Animated>
			</a>
			<a
				href="https://twitter.com/cloudcoding_"
				target="_blank"
				rel="noreferrer"
			>
				<Animated
					animationInDelay={1600}
					animationIn="fadeInDown"
					animationOut="fadeOutUp"
					animationInDuration={1000}
					animationOutDuration={1000}
					isVisible={true}
				>
					<img src={twitter} alt="Twitter" />
				</Animated>
			</a>
		</>
	);
};

export default Socials;
