import React, { useState, useEffect } from 'react';

import NavItemsMobile from './NavItemsMobile';
import Hamburger from 'hamburger-react';

const MenuMobile = () => {
	const [isOpen, setOpen] = useState<boolean>(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	});

	return (
		<>
			<Hamburger
				color="#89ddff"
				label="Navigation Menu"
				toggled={isOpen}
				toggle={setOpen}
			/>
			{isOpen && <NavItemsMobile setOpen={setOpen} />}
		</>
	);
};

export default MenuMobile;
