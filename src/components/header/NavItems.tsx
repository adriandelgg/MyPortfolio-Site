import { animated, useTrail } from '@react-spring/web';
import { Button } from '@mui/material';

export const NavItems = () => {
	const trails = useTrail(4, {
		from: { y: -30, opacity: 0 },
		to: { y: 0, opacity: 1 },
		delay: 2200
	});

	return (
		<ul className="nav-links">
			<animated.li style={trails[0]}>
				<a className="nav-link" href="#skills" key="0">
					<span className="number">1.</span> Skills
				</a>
			</animated.li>
			<animated.li style={trails[1]}>
				<a className="nav-link" href="#projects" key="1">
					<span className="number">2.</span> Projects
				</a>
			</animated.li>
			<animated.li style={trails[2]}>
				<a className="nav-link" href="#contact" key="2">
					<span className="number">3.</span> Contact
				</a>
			</animated.li>
			<animated.li style={trails[3]}>
				<Button
					sx={{
						backgroundColor: '#181c3a',
						borderColor: '#f7bb50',
						color: '#f7bb50'
					}}
					className="resume-btn"
					variant="outlined"
					href=""
					target="_blank"
					rel="noopener noreferrer"
					key="3"
				>
					Resume
				</Button>
			</animated.li>
		</ul>
	);
};
