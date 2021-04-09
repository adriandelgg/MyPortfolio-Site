import React, { useState } from 'react';

import NavItems from './NavItems';
import Hamburger from 'hamburger-react';

const MenuMobile = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<Hamburger
				label="Navigation Menu"
				onToggle={toggle => setOpen(toggle)}
			/>
			{isOpen && <NavItems />}
		</>
	);
};

export default MenuMobile;
