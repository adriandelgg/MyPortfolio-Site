import React from 'react';
import { Button } from '@material-ui/core';
import { Animated } from 'react-animated-css';

const NavItems = () => {
	return (
		<ul className="nav-links">
			<Animated
				animationInDelay={2200}
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
			</Animated>
			<Animated
				animationInDelay={2400}
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<li>
					<a className="nav-link" href="#skills">
						<span className="number">2.</span> Skills
					</a>
				</li>
			</Animated>
			<Animated
				animationInDelay={2600}
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<li>
					<a className="nav-link" href="#projects">
						<span className="number">3.</span> Projects
					</a>
				</li>
			</Animated>
			{/* <Animated
				animationInDelay={2800}
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<li>
					<a className="nav-link" href="#contact">
						.contact()
					</a>
				</li>
			</Animated> */}
			{/* <Animated
				animationInDelay={3000}
				animationIn="fadeInDown"
				animationOut="fadeOutUp"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<li>
					<Button
						className="nav-link"
						href="resume.pdf"
						variant="outlined"
					>
						Resume
					</Button>
				</li>
			</Animated> */}
		</ul>
	);
};

export default NavItems;
