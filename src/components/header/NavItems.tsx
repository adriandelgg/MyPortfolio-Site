import React from 'react';
import { Button } from '@material-ui/core';

const mobileSize = () => {};

const NavItems = () => {
	return (
		<ul className="nav-links">
			<li>
				<a className="nav-link" href="#about-me">
					About
				</a>
			</li>
			<li>
				<a className="nav-link" href="#skills">
					Skills
				</a>
			</li>
			<li>
				<a className="nav-link" href="#projects">
					Projects
				</a>
			</li>
			<li>
				<a className="nav-link" href="#contact">
					Contact
				</a>
			</li>
			<li>
				<Button href="resume.pdf" variant="outlined">
					Resume
				</Button>
			</li>
		</ul>
	);
};

export default NavItems;
