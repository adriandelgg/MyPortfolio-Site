import { skillsList } from "./skillsList";

export const Skills = () => (
  <section id="skills" className="mb-14 md:mb-32">
    <h3 className="section-heading">My Skills</h3>
    <div className="flex flex-wrap justify-center">
      {skillsList.map(({ name, img }) => (
        <figure
          className="mx-auto mb-16 mt-2 flex w-1/2 flex-col items-center text-center md:mb-20 md:w-1/3"
          key={name}
        >
          <img
            className="animation h-16 w-auto object-contain md:h-20"
            src={img}
            alt={name}
          />
          <figcaption className="font-jetbrains mt-5 text-lg font-medium text-gray-200 md:text-xl">
            {name}
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);
