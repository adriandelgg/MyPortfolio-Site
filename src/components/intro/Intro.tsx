import Socials from '../../helper/Socials';
import ButtonMail from './Button';

const Intro: React.FC = () => (
	<section className="intro-section">
		<h1 className="intro-greeting">Hello, my name is</h1>
		<h2 className="intro-name">Adrian Delgado.</h2>
		<h3 className="intro-web-dev">
			<span className="web-dev">&lt;Full-Stack Blockchain Developer/&gt;</span>
		</h3>
		<p className="intro-paragraph">
			My dream is that my work will positively impact the world forever.
		</p>
		<p className="intro-paragraph">
			I love bringing ideas to life, and am a strong believer that blockchain
			technology will revolutionize the world.
		</p>
		{/* <div className="intro-socials">
			<Socials />
		</div> */}
		<ButtonMail />
	</section>
);
export default Intro;
