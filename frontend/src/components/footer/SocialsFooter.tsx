import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiMail,
	FiYoutube
} from 'react-icons/fi';

const Socials = () => (
	<>
		<a
			href="https://github.com/adriandelgg"
			target="_blank"
			rel="noreferrer noopener"
		>
			<FiGithub
				className="social-footer animation"
				size="1.5em"
				color="white"
			/>
		</a>
		<a
			href="https://www.linkedin.com/in/adriandelgado1/"
			target="_blank"
			rel="noreferrer noopener"
		>
			<FiLinkedin
				className="social-footer animation"
				size="1.5em"
				color="white"
			/>
		</a>
		<a
			href="https://www.youtube.com/c/codeonblocks"
			target="_blank"
			rel="noreferrer noopener"
		>
			<FiYoutube
				className="social-footer animation"
				size="1.5em"
				color="white"
			/>
		</a>
		<a href="mailto:adriandelgado.tech@gmail.com">
			<FiMail className="social-footer animation" size="1.6em" color="white" />
		</a>
		<a
			href="https://twitter.com/codeonblocks"
			target="_blank"
			rel="noreferrer noopener"
		>
			<FiTwitter
				className="social-footer animation"
				size="1.5em"
				color="white"
			/>
		</a>
	</>
);

export default Socials;
