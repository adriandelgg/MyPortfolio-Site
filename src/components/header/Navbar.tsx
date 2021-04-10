import React from 'react';

import MenuMobile from './MenuMobile';
import IsMobile from '../../helper/IsMobile';
import NavItems from './NavItems';

const Navbar = () => {
	const { isMobile } = IsMobile();

	return (
		<nav>
			{!isMobile && <NavItems />}
			{isMobile && <MenuMobile />}
		</nav>
	);
};

export default Navbar;
