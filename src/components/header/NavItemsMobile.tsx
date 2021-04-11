import React from 'react';
import { Button } from '@material-ui/core';

const NavItemMobile = () => {
	return (
		<ul className="nav-links">
			<li>
				<a className="nav-link" href="#about-me">
					.about()
				</a>
			</li>

			<li>
				<a className="nav-link" href="#skills">
					.skills()
				</a>
			</li>

			<li>
				<a className="nav-link" href="#projects">
					.projects()
				</a>
			</li>

			<li>
				<a className="nav-link" href="#contact">
					.contact()
				</a>
			</li>

			<li>
				<Button className="nav-link" href="resume.pdf" variant="outlined">
					Resume
				</Button>
			</li>
		</ul>
	);
};

export default NavItemMobile;
