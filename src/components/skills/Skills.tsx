import { skills } from "./skillsList";

export const Skills = () => (
  <section id="skills" className="skills-section">
    <h3 className="section-heading">My Skills</h3>
    <div className="skills-container">
      {skills.map(({ name, img }) => (
        <figure className="skill" key={name}>
          <img className="animation skill-img" src={img} alt={name} />
          <figcaption className="skill-name">{name}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);
