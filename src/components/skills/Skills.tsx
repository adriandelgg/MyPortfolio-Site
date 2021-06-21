import './skills.css';
import skills from './skillsList';

const Skills: React.FC = () => (
	<section id="skills" className="skills-section">
		<h3 className="section-heading">My Skills</h3>
		<div className="skills-container">
			{skills.map((skill, index) => {
				const { name, img, alt } = skill;
				return (
					<figure className="skill" key={index}>
						<img className="animation skill-img" src={img} alt={alt || name} />
						<figcaption className="skill-name">{name}</figcaption>
					</figure>
				);
			})}
		</div>
	</section>
);

export default Skills;
