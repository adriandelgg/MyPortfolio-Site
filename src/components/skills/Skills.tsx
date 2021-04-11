import React from 'react';
import './skills.css';
import skills from './skillsList';

const Skills = () => {
	return (
		<section id="skills">
			<h3 className="section-heading">My Skills</h3>
			<div className="skills-container">
				{skills.map(skill => {
					const { name, img, alt } = skill;
					return (
						<div className="skill">
							<img className="skill-img" src={img} alt={alt || name} />
							<h4 className="skill-name">{name}</h4>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Skills;
