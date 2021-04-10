import React, { useState, useEffect } from 'react';

import MenuMobile from './MenuMobile';
import NavItems from './NavItems';

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(true);

	// Checks if screen size is mobile on load.
	useEffect(() => {
		window.innerWidth <= 550 ? setIsMobile(true) : setIsMobile(false);
	}, []);

	// Checks for mobile size.
	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 550) setIsMobile(true);
			else setIsMobile(false);
		});
		return () => {
			window.removeEventListener('resize', () => {});
		};
	});

	return (
		<nav>
			{!isMobile && <NavItems />}
			{isMobile && <MenuMobile />}
		</nav>
	);
};

export default Navbar;
