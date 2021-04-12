import React from 'react';
import Socials from '../../helper/Socials';
import './footer.css';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
	const handleClick = () => {};

	return (
		<footer>
			<div className="socials-footer">
				<Socials />
			</div>
			<h5 className="footer-text">Created by Adrian Delgado 2021</h5>
			<div className="backup-arrow">
				<a href="#">
					<HiArrowUp size="3em" color="#fdfdfd" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
