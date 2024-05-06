import { Card, CardMedia, CardContent, CardHeader, CardActions } from "@mui/material";
import { projectsList } from "./projectsList";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { GITHUB_URL } from "@/config/constants";

export const Projects = () => (
  <section id="projects">
    <h3 className="section-heading">Projects I&apos;ve Created</h3>
    <ul>
      {projectsList.map(({ name, img, imgAlt, description, tools, github, demo }) => (
        <li key={name}>
          <Card
            raised
            sx={{
              backgroundColor: "#181c3a",
              color: "white",
              marginBottom: "2.8em"
            }}
          >
            <CardHeader component="h4" title={name} />
            <CardMedia>
              <a href={demo} target="_blank" rel="noreferrer noopener">
                <img className="w-full" src={img} alt={imgAlt} />
              </a>
            </CardMedia>
            <CardContent>
              <p className="leading-6">{description}</p>
            </CardContent>
            <CardContent>
              <h5>Tools Used:</h5>
              <ul className="font-lato flex flex-wrap leading-8">
                {tools.map(tool => (
                  <li className="mr-4" key={Math.random()}>
                    {tool}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardActions>
              <a href={demo} target="_blank" rel="noreferrer noopener">
                <FiExternalLink className="ml-2" size="1.5em" color="white" />
              </a>
              <a href={GITHUB_URL + github} target="_blank" rel="noreferrer noopener">
                <FiGithub className="ml-1" size="1.5em" color="white" />
              </a>
            </CardActions>
          </Card>
        </li>
      ))}
    </ul>
  </section>
);
