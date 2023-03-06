import { FiGithub, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';
import { animated, useTrail } from '@react-spring/web';

export const Socials = () => {
	const trails = useTrail(4, {
		from: { y: -30, opacity: 0 },
		to: { y: 0, opacity: 1 },
		delay: 2500
	});

	return (
		<>
			<a
				href="https://github.com/codeonblocks"
				target="_blank"
				rel="noreferrer noopener"
			>
				<animated.li style={trails[0]}>
					<FiGithub
						className="social-img animation"
						size="1.5em"
						color="#c8d3f0"
					/>
				</animated.li>
			</a>
			<a
				href="https://www.linkedin.com/in/adriandelgado1/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<animated.li style={trails[1]}>
					<FiLinkedin
						className="social-img animation"
						size="1.5em"
						color="#c8d3f0"
					/>
				</animated.li>
			</a>
			<a
				href="https://www.youtube.com/c/codeonblocks"
				target="_blank"
				rel="noreferrer noopener"
			>
				<animated.li style={trails[2]}>
					<FiYoutube
						className="social-img animation"
						size="1.5em"
						color="#c8d3f0"
					/>
				</animated.li>
			</a>
			<a
				href="https://twitter.com/codeonblocks"
				target="_blank"
				rel="noreferrer noopener"
			>
				<animated.li style={trails[3]}>
					<FiTwitter
						className="social-img animation"
						size="1.5em"
						color="#c8d3f0"
					/>
				</animated.li>
			</a>
		</>
	);
};
