import Image from 'next/image';
import { skills } from './skillsList';

const Skills: React.FC = () => (
	<section id="skills" className="skills-section">
		<h3 className="section-heading">My Skills</h3>
		<div className="skills-container">
			{skills.map(({ name, img, alt }) => (
				<figure className="skill" key={name}>
					<div className="animation">
						<Image height={80} width={80} src={img} alt={alt || name} />
					</div>
					<figcaption className="skill-name">{name}</figcaption>
				</figure>
			))}
		</div>
	</section>
);

export default Skills;
