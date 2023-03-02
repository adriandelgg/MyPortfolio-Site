import { Animated } from 'react-animated-css';
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';

export const Socials = () => (
	<>
		<a
			href="https://github.com/adriandelgg"
			target="_blank"
			rel="noreferrer noopener"
		>
			<Animated
				animationInDelay={2500}
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<FiGithub
					className="social-img animation"
					size="1.5em"
					color="#c8d3f0"
				/>
			</Animated>
		</a>
		<a
			href="https://www.linkedin.com/in/adriandelgado1/"
			target="_blank"
			rel="noreferrer noopener"
		>
			<Animated
				animationInDelay={2700}
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<FiLinkedin
					className="social-img animation"
					size="1.5em"
					color="#c8d3f0"
				/>
			</Animated>
		</a>
		<a
			href="https://www.youtube.com/c/codeonblocks"
			target="_blank"
			rel="noreferrer noopener"
		>
			<Animated
				animationInDelay={2900}
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<FiYoutube
					className="social-img animation"
					size="1.5em"
					color="#c8d3f0"
				/>
			</Animated>
		</a>
		<a
			href="https://twitter.com/codeonblocks"
			target="_blank"
			rel="noreferrer noopener"
		>
			<Animated
				animationInDelay={3100}
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<FiTwitter
					className="social-img animation"
					size="1.5em"
					color="#c8d3f0"
				/>
			</Animated>
		</a>
	</>
);
