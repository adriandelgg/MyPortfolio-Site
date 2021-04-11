import React from 'react';
import './projects.css';

import gitHubImg from '../../img/github.svg';
import externalLink from '../../img/external-link.svg';
import Projects from './projectsObj';
import {
	Card,
	CardMedia,
	CardContent,
	CardHeader,
	CardActionArea,
	CardActions
} from '@material-ui/core';

const Project = () => {
	return (
		<ul className="projects-list">
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
					<Card className="project-card" raised>
						<li key={Math.random()}>
							<CardHeader component="h4" title={name} />
							<CardMedia>
								<img className="project-photo" src={img} alt={imgAlt} />
							</CardMedia>
							<CardContent>
								<p className="project-description">{description}</p>
							</CardContent>
							<CardContent>
								<h5>Tools Used:</h5>
								<ul className="tech-tools">
									{tools.map(tool => (
										<li className="tech-tool">{tool}</li>
									))}
								</ul>
							</CardContent>
							<CardActions>
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
							</CardActions>
						</li>
					</Card>
				);
			})}
		</ul>
	);
};

export default Project;
