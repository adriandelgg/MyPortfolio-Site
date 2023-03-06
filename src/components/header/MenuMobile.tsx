import { useState, useEffect } from 'react';
import NavItemsMobile from './NavItemsMobile';
import Hamburger from 'hamburger-react';

export const MenuMobile = () => {
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
			document.getElementById('main')!.style.filter =
				'blur(5px) brightness(0.7)';
		} else {
			document.body.style.overflow = 'visible';
			document.getElementById('main')!.style.filter = 'none';
		}
	});

	return (
		<>
			<Hamburger
				color="#f7bb50"
				label="Navigation Menu"
				toggled={isOpen}
				toggle={setOpen}
			/>
			{isOpen && <NavItemsMobile setOpen={setOpen} />}
		</>
	);
};
