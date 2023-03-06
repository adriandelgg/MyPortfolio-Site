import type { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';
interface Props {
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavItemsMobile = ({ setOpen }: Props) => {
	const handleClick = (id: string) => {
		setOpen(false);
		document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<ul id="mobile-nav" className="nav-links animate-mobile animate-back-in">
			{/* <li className="nav-link">
				<a onClick={() => handleClick('about-me')}>About</a>
			</li> */}
			<li className="nav-link">
				<a onClick={() => handleClick('skills')}>Skills</a>
			</li>
			<li className="nav-link">
				<a onClick={() => handleClick('projects')}>Projects</a>
			</li>
			<li className="nav-link">
				<a onClick={() => handleClick('contact')}>Contact</a>
			</li>
			<li className="resume-btn">
				<Button
					sx={{
						backgroundColor: '#181c3a',
						borderColor: '#f7bb50',
						color: '#f7bb50'
					}}
					variant="outlined"
					href=""
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => setOpen(false)}
				>
					Resume
				</Button>
			</li>
		</ul>
	);
};
