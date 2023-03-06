import { animated, useTrail } from '@react-spring/web';
import { Button } from '@mui/material';

export const NavItems = () => {
	const trails = useTrail(4, {
		from: { y: -30, opacity: 0 },
		to: { y: 0, opacity: 1 },
		delay: 2200
	});

	function handleClick(id: string) {
		document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<ul className="nav-links">
			<animated.li
				className="nav-link"
				style={trails[0]}
				onClick={() => handleClick('skills')}
			>
				<a>
					<span className="number">1.</span> Skills
				</a>
			</animated.li>
			<animated.li
				className="nav-link"
				style={trails[1]}
				onClick={() => handleClick('projects')}
			>
				<a>
					<span className="number">2.</span> Projects
				</a>
			</animated.li>
			<animated.li
				className="nav-link"
				style={trails[2]}
				onClick={() => handleClick('contact')}
			>
				<a>
					<span className="number">3.</span> Contact
				</a>
			</animated.li>
			<animated.li style={trails[3]}>
				<Button
					className="resume-btn"
					sx={{
						backgroundColor: '#181c3a',
						borderColor: '#f7bb50',
						color: '#f7bb50'
					}}
					variant="outlined"
					href=""
					target="_blank"
					rel="noopener noreferrer"
				>
					Resume
				</Button>
			</animated.li>
		</ul>
	);
};
