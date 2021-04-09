import React, { useState } from 'react';

import MenuMobile from './MenuMobile';
import NavItems from './NavItems';

const Navbar = () => {
	// Once a certain width, toggle from mobile to normal

	return (
		<nav>
			{/* <NavItems /> */}
			<MenuMobile />
		</nav>
	);
};

export default Navbar;
