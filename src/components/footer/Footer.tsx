import './footer.css';

import SocialsMobile from './SocialsFooter';
import { HiArrowUp } from 'react-icons/hi';

const Footer: React.FC = () => {
	return (
		<footer>
			<h3 id="contact" className="contact-me">
				Need a website?
				<br />
				Contact me!
			</h3>
			<div className="socials-footer">
				<SocialsMobile />
			</div>
			<h5 className="footer-text">© Created by Adrian Delgado 2021</h5>
			<div className="backup-arrow animation">
				<a href="#">
					<HiArrowUp size="3em" color="#fdfdfd" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
