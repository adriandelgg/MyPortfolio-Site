import { skillsList } from "./skillsList";

export const Skills = () => (
  <section id="skills" className="mb-[8em]">
    <h3 className="section-heading mb-0">My Skills</h3>
    <div className="flex flex-wrap justify-center">
      {skillsList.map(({ name, img }) => (
        <figure
          className="mx-auto mt-[6em] flex w-1/2 flex-col items-center text-center md:w-1/3"
          key={name}
        >
          <img className="animation skill-img" src={img} alt={name} />
          <figcaption className="skill-name">{name}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);
