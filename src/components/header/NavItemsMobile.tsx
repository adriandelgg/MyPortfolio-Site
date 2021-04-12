import React from 'react';
import { Button } from '@material-ui/core';
interface Props {
	setOpen: (isOpen: boolean) => void;
}

const NavItemMobile = ({ setOpen }: Props) => {
	const handleClick = () => {
		setOpen(false);
	};

	return (
		<ul className="nav-links">
			<li>
				<a onClick={handleClick} className="nav-link" href="#about-me">
					About
				</a>
			</li>

			<li>
				<a onClick={handleClick} className="nav-link" href="#skills">
					Skills
				</a>
			</li>

			<li>
				<a onClick={handleClick} className="nav-link" href="#projects">
					Projects
				</a>
			</li>

			{/* <li>
				<a onClick={handleClick} className="nav-link" href="#contact">
					.contact()
				</a>
			</li>

			<li>
				<Button
					onClick={handleClick}
					className="nav-link"
					href="resume.pdf"
					variant="outlined"
				>
					Resume
				</Button>
			</li> */}
		</ul>
	);
};

export default NavItemMobile;
