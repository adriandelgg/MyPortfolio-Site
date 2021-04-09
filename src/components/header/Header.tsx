import React from 'react';
import './header.css';

import Navbar from './Navbar';
import logo from '../../img/terminal.svg';

const Header = () => {
	return (
		<header>
			<img src={logo} alt="Logo" height="35" />
			<Navbar />
		</header>
	);
};

export default Header;
