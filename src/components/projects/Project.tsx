import { projectsList } from './projectsObj';
import {
	Card,
	CardMedia,
	CardContent,
	CardHeader,
	CardActions
} from '@mui/material';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Project = () => {
	return (
		<ul className="projects-list">
			{projectsList.map(
				({ name, img, imgAlt, description, tools, github, demo }) => (
					<li key={name}>
						<Card
							raised
							sx={{
								backgroundColor: '#181c3a',
								color: 'white',
								marginBottom: '2.8em'
							}}
						>
							<CardHeader component="h4" title={name} />
							<CardMedia>
								<a href={demo} target="_blank" rel="noreferrer noopener">
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
										<li className="tech-tool" key={Math.random()}>
											{tool}
										</li>
									))}
								</ul>
							</CardContent>
							<CardActions>
								<a href={demo} target="_blank" rel="noreferrer noopener">
									<FiExternalLink
										className="external-link"
										size="1.5em"
										color="white"
									/>
								</a>
								<a href={github} target="_blank" rel="noreferrer noopener">
									<FiGithub
										className="github-link"
										size="1.5em"
										color="white"
									/>
								</a>
							</CardActions>
						</Card>
					</li>
				)
			)}
		</ul>
	);
};

export default Project;
