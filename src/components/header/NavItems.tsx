import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Animated } from 'react-animated-css';

const useStyles = makeStyles({
	root: {
		backgroundColor: '#181c3a',
		borderColor: '#f7bb50',
		color: '#f7bb50'
	}
});

const NavItems = () => {
	const styles = useStyles();
	return (
		<ul className="nav-links">
			{/* <Animated
				animationInDelay={2200} <-- Starting value
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<li>
					<a className="nav-link" href="#about-me">
						<span className="number">1.</span> About
					</a>
				</li>
			</Animated> */}
			<Animated
				// animationInDelay={2200}
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<li>
					<a className="nav-link" href="#skills">
						<span className="number">1.</span> Skills
					</a>
				</li>
			</Animated>
			<Animated
				animationInDelay={200}
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<li>
					<a className="nav-link" href="#projects">
						<span className="number">2.</span> Projects
					</a>
				</li>
			</Animated>
			<Animated
				animationInDelay={400}
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<li>
					<a className="nav-link" href="#contact">
						<span className="number">3.</span> Contact
					</a>
				</li>
			</Animated>
			<Animated
				animationInDelay={550}
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<li>
					<Button
						classes={{ root: styles.root }}
						className="resume-btn"
						variant="outlined"
						href="https://drive.google.com/file/d/16jIYHjLf3hYhd5_s04VT_Vnyt9MuWnfS/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</Button>
				</li>
			</Animated>
		</ul>
	);
};

export default NavItems;
