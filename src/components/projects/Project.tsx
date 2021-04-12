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
import useStyles from './CardStyles';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Project = () => {
	const styles = useStyles();
	return (
		<ul className="projects-list">
			{Projects.map((project, index) => {
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
					<li key={index}>
						<Card classes={{ root: styles.root }} raised>
							<CardHeader component="h4" title={name} />
							<CardMedia>
								<a href={demo} target="_blank" rel="noreferrer">
									<img
										className="project-photo"
										src={img}
										alt={imgAlt}
									/>
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
								<a href={demo} target="_blank" rel="noreferrer">
									<FiExternalLink
										className="external-link"
										size="1.5em"
										color="white"
									/>
								</a>
								<a href={github} target="_blank" rel="noreferrer">
									<FiGithub
										className="github-link"
										size="1.5em"
										color="white"
									/>
								</a>
							</CardActions>
						</Card>
					</li>
				);
			})}
		</ul>
	);
};

export default Project;
