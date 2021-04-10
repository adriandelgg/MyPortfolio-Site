import React from 'react';

import gitHub from '../img/github.svg';
import linkedIn from '../img/linkedin.svg';
import twitter from '../img/twitter.svg';
import instagram from '../img/instagram.svg';

interface SocialsProps {
	intro: string;
	delays: string[];
}

const Socials = ({ intro, delays: [delay1, delay2, delay3] }: SocialsProps) => {
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
				<img
					className={`${intro} ${delay1} animate__faster`}
					src={linkedIn}
					alt="LinkedIn"
				/>
			</a>
			<a
				href="https://www.instagram.com/cloudcoding/"
				target="_blank"
				rel="noreferrer"
			>
				<img
					className={`${intro} ${delay2} animate__faster`}
					src={instagram}
					alt="Instagram"
				/>
			</a>
			<a
				href="https://twitter.com/cloudcoding_"
				target="_blank"
				rel="noreferrer"
			>
				<img
					className={`${intro} ${delay3} animate__faster`}
					src={twitter}
					alt="Twitter"
				/>
			</a>
		</>
	);
};

export default Socials;
