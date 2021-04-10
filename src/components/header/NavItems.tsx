import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({});

const NavItems = () => {
	return (
		<ul className="nav-links">
			<li>
				<a className="nav-link" href="#about-me">
					.about( )
				</a>
			</li>
			<li>
				<a className="nav-link" href="#skills">
					.skills( )
				</a>
			</li>
			<li>
				<a className="nav-link" href="#projects">
					.projects( )
				</a>
			</li>
			<li>
				<a className="nav-link" href="#contact">
					.contact( )
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
