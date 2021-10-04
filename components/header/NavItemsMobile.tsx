import { Button, makeStyles } from '@material-ui/core';
interface Props {
	setOpen: (isOpen: boolean) => void;
}

const useStyles = makeStyles({
	root: {
		backgroundColor: '#181c3a',
		borderColor: '#f7bb50',
		color: '#f7bb50'
	}
});

const NavItemMobile = ({ setOpen }: Props) => {
	const styles = useStyles();
	const handleClick = () => {
		setOpen(false);
	};

	return (
		<ul id="mobile-nav" className="nav-links animate-mobile animate-back-in">
			{/* <li className="nav-link-li">
				<a onClick={handleClick} className="nav-link" href="#about-me">
					About
				</a>
			</li> */}

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

			<li>
				<a onClick={handleClick} className="nav-link" href="#contact">
					Contact
				</a>
			</li>

			<li className="resume-btn">
				<Button
					onClick={handleClick}
					classes={{ root: styles.root }}
					variant="outlined"
					href="https://drive.google.com/file/d/1NmHqBa8aFOU0EeeVto8YF2G7lsWoD_F0/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					Resume
				</Button>
			</li>
		</ul>
	);
};

export default NavItemMobile;
