import './intro.css';

import Socials from '../../helper/Socials';
import ButtonMail from './Button';

const Intro: React.FC = () => {
	return (
		<section className="intro-section">
			<h1 className="intro-greeting">Hello, my name is</h1>
			<h2 className="intro-name">Adrian Delgado.</h2>
			<h3 className="intro-web-dev">
				<span className="web-dev">&lt;Full-Stack Blockchain Developer./&gt;</span>
				{/* &lt;Web Developer/&gt; */}
			</h3>
			<p className="intro-paragraph">
				My dream is to create something that's going to impact the world forever
				using blockchain technology.
				<br />I enjoy bringing ideas to life, and am a strong believer that
				blockchain is the future of of the internet as well as many of our current
				business models.
			</p>
			<div className="intro-socials">
				<Socials />
			</div>
			<ButtonMail />
		</section>
	);
};

export default Intro;
