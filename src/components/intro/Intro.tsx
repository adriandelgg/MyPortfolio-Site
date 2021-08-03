import './intro.css';
import Socials from '../../helper/Socials';
import ButtonMail from './Button';

const Intro: React.FC = () => (
	<section className="intro-section">
		<h1 className="intro-greeting">Hello, my name is</h1>
		<h2 className="intro-name">Adrian Delgado.</h2>
		<h3 className="intro-web-dev">
			<span className="web-dev">&lt;Full-Stack Blockchain Developer./&gt;</span>
		</h3>
		<p className="intro-paragraph">
			My dream is that my work will help humanity and positively impact the
			world forever.
			<br />I enjoy bringing ideas to life, and am a strong believer that
			blockchain technology will change our everyday lives soon.
		</p>
		<div className="intro-socials">
			<Socials />
		</div>
		<ButtonMail />
	</section>
);
export default Intro;
