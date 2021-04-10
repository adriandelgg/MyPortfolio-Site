import React from 'react';
import './projects.css';

import gitHubImg from '../../img/github.svg';
import externalLink from '../../img/external-link.svg';
import Projects from './projectsObj';

const Project = () => {
	return (
		<ul>
			{Projects.map(project => {
				const {
					name,
					img,
					imgAlt,
					description,
					tools,
					github,
					demo
				} = project;

				return (
					<li key={Math.random()}>
						<h4>{name}</h4>
						<img className="project-photo" src={img} alt={imgAlt} />
						<p className="project-description">{description}</p>
						<ul className="tech-tools">
							{tools.map(tool => (
								<li className="tech-tool">{tool}</li>
							))}
						</ul>
						<a href={github} target="_blank" rel="noreferrer">
							<img
								aria-label="Source Code"
								src={gitHubImg}
								alt="Source Code"
							/>
						</a>
						<a href={demo} target="_blank" rel="noreferrer">
							<img
								aria-label="Project Demo"
								src={externalLink}
								alt="Project Demo"
							/>
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Project;
