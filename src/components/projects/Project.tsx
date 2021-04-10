import React from 'react';

import gitHub from '../../img/github.svg';
import externalLink from '../../img/external-link.svg';
import Projects from './projectsObj';

const Project = () => {
	return (
		<ul>
			{Projects.map(project => (
				<li>
					<h4>{project.name}</h4>
					<img src={project.img} alt={project.imgAlt} />
					<p>{project.description}</p>
					<ul>
						{project.tools.map(tool => (
							<li>{tool}</li>
						))}
					</ul>
					<a href={project.github} target="_blank" rel="noreferrer">
						<img
							aria-label="Source Code"
							src={gitHub}
							alt="Source Code"
						/>
					</a>
					<a href={project.demo} target="_blank" rel="noreferrer">
						<img
							aria-label="Project Demo"
							src={externalLink}
							alt="Project Demo"
						/>
					</a>
				</li>
			))}
		</ul>
	);
};

export default Project;
