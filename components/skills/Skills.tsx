import Image from 'next/image';
import { skills } from './skillsList';

const Skills: React.FC = () => (
	<section id="skills" className="skills-section">
		<h3 className="section-heading">My Skills</h3>
		<div className="skills-container">
			{skills.map(({ name, img, alt }) => (
				<figure className="skill animation" key={name}>
					<Image height={75} width={75} src={img} alt={alt || name} />
					<figcaption className="skill-name">{name}</figcaption>
				</figure>
			))}
		</div>
	</section>
);

export default Skills;
