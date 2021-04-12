import React from 'react';
import SocialsMobile from './SocialsFooter';
import './footer.css';
import { HiArrowUp } from 'react-icons/hi';

const Footer = () => {
	return (
		<footer>
			<div className="socials-footer">
				<SocialsMobile />
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
