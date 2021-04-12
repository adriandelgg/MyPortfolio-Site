import React from 'react';

import { Animated } from 'react-animated-css';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';

const Socials = () => {
	return (
		<>
			<a
				href="https://github.com/adriandelgg"
				target="_blank"
				rel="noreferrer"
			>
				<Animated
					animationInDelay={3000}
					animationIn="fadeInDown"
					animationOut="fadeOutUp"
					animationInDuration={1000}
					animationOutDuration={1000}
					isVisible={true}
				>
					<FiGithub className="social-img" size="1.5em" color="#c8d3f0" />
				</Animated>
			</a>
			<a
				href="https://www.linkedin.com/in/adriandelgado1/"
				target="_blank"
				rel="noreferrer"
			>
				<Animated
					animationInDelay={3200}
					animationIn="fadeInDown"
					animationOut="fadeOutUp"
					animationInDuration={1000}
					animationOutDuration={1000}
					isVisible={true}
				>
					<FiLinkedin
						className="social-img"
						size="1.5em"
						color="#c8d3f0"
					/>
				</Animated>
			</a>
			<a
				href="https://www.instagram.com/cloudcoding/"
				target="_blank"
				rel="noreferrer"
			>
				<Animated
					animationInDelay={3400}
					animationIn="fadeInDown"
					animationOut="fadeOutUp"
					animationInDuration={1000}
					animationOutDuration={1000}
					isVisible={true}
				>
					<FiInstagram
						className="social-img"
						size="1.5em"
						color="#c8d3f0"
					/>
				</Animated>
			</a>
			<a
				href="https://twitter.com/cloudcoding_"
				target="_blank"
				rel="noreferrer"
			>
				<Animated
					animationInDelay={3600}
					animationIn="fadeInDown"
					animationOut="fadeOutUp"
					animationInDuration={1000}
					animationOutDuration={1000}
					isVisible={true}
				>
					<FiTwitter className="social-img" size="1.5em" color="#c8d3f0" />
				</Animated>
			</a>
		</>
	);
};

export default Socials;
