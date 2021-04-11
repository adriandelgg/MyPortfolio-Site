import React, { useState } from 'react';

import NavItemsMobile from './NavItemsMobile';
import Hamburger from 'hamburger-react';

const MenuMobile = () => {
	const [isOpen, setOpen] = useState(false);

	const handleToggle = (toggle: boolean) => {
		setOpen(toggle);
		document.body.style.overflow = toggle ? 'hidden' : 'visible';
		//Find out how to access <main>
	};

	return (
		<>
			<Hamburger
				color="#89ddff"
				label="Navigation Menu"
				onToggle={handleToggle}
			/>
			{isOpen && <NavItemsMobile />}
		</>
	);
};

export default MenuMobile;
