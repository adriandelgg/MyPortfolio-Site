import React from 'react';
import './projects.css';

import Projects from './projectsObj';
import {
	Card,
	CardMedia,
	CardContent,
	CardHeader,
	CardActions
} from '@material-ui/core';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Project = () => (
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
							<a href={demo} target="_blank" rel="noreferrer">
								<img className="project-photo" src={img} alt={imgAlt} />
							</a>
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
								<FiGithub />
							</a>
							<a href={demo} target="_blank" rel="noreferrer">
								<FiExternalLink />
							</a>
						</CardActions>
					</li>
				</Card>
			);
		})}
	</ul>
);

export default Project;
