import React from 'react';

import gitHub from '../img/github.svg';
import linkedIn from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';
import instagram from '../img/instagram.svg';

interface SocialsProps {
	intro: string;
}

const Socials = ({ intro }: SocialsProps) => {
	return (
		<>
			<a
				href="https://github.com/adriandelgg"
				target="_blank"
				rel="noreferrer"
			>
				<img className={intro} src={gitHub} alt="GitHub" />
			</a>
			<a
				href="https://www.linkedin.com/in/adriandelgado1/"
				target="_blank"
				rel="noreferrer"
			>
				<img className={intro} src={linkedIn} alt="LinkedIn" />
			</a>
			<a
				href="https://www.instagram.com/cloudcoding/"
				target="_blank"
				rel="noreferrer"
			>
				<img className={intro} src={instagram} alt="Instagram" />
			</a>
			<a
				href="https://twitter.com/cloudcoding_"
				target="_blank"
				rel="noreferrer"
			>
				<img className={intro} src={twitter} alt="Twitter" />
			</a>
		</>
	);
};

export default Socials;
