import Image from 'next/image';
import { makeStyles } from '@material-ui/core';
import {
	Card,
	CardMedia,
	CardContent,
	CardHeader,
	CardActions
} from '@material-ui/core';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Projects from './projectsObj';

const useStyles = makeStyles(
	{
		root: {
			backgroundColor: '#181c3a',
			color: 'white',
			marginBottom: '2.8em'
		}
	},
	{ index: 2 }
);

const Project = () => {
	const styles = useStyles();
	return (
		<ul className="projects-list">
			{Projects.map(
				({ name, img, imgAlt, description, tools, github, demo }) => (
					<li key={name}>
						<Card classes={{ root: styles.root }} raised>
							<CardHeader component="h4" title={name} />
							<CardMedia component="img" image={img} alt={imgAlt} />
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
				)
			)}
		</ul>
	);
};

export default Project;
