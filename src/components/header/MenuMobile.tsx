import React, { useState } from 'react';

import NavItems from './NavItems';
import Hamburger from 'hamburger-react';

const MenuMobile = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<Hamburger
				color="#89ddff"
				label="Navigation Menu"
				onToggle={toggle => setOpen(toggle)}
			/>
			{isOpen && <NavItems />}
		</>
	);
};

export default MenuMobile;
