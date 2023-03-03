import { Socials } from '../../helper/Socials';
import { ButtonMail } from './ButtonMail';

export const Intro = () => (
	<section className="intro-section">
		<h1 className="intro-greeting">Hello, my name is</h1>
		<h2 className="intro-name">Adrian Delgado.</h2>
		<h3 className="intro-web-dev">
			<span className="web-dev">&lt;Full-Stack Blockchain Developer/&gt;</span>
		</h3>
		<p className="intro-paragraph">
			I&apos;m a blockchain enthusiast with a passion for bringing ideas to
			life. My dream is to use my skills to make a positive impact on the world.
		</p>
		<p className="intro-paragraph">
			I believe that blockchain technology has the potential to revolutionize
			the way we live and work, and I&apos;m excited to be a part of this
			transformation. Through my work, I aim to contribute to this movement and
			create solutions that make a lasting difference.
		</p>
		<div className="intro-socials">
			<Socials />
		</div>
		<ButtonMail />
	</section>
);
