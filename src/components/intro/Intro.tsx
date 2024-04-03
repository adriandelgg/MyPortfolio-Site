import { Socials } from "@/components/intro/Socials";
import { ButtonMail } from "./ButtonMail";

export const Intro = () => (
  <section className="intro-section">
    <h1 className="intro-greeting">Hello, my name is</h1>
    <h2 className="intro-name">Adrian Delgado.</h2>
    <h3 className="intro-web-dev">
      <span className="web-dev">&lt;Software Engineer/&gt;</span>
    </h3>
    <p className="intro-paragraph intro-statement">
      I bring ideas to life, one line at a time. 💡
    </p>
    <p className="intro-paragraph">
      I&apos;m a results-driven developer with a passion for building software that makes
      a meaningful impact on the world.
    </p>
    <div className="intro-socials">
      <Socials />
    </div>
    <ButtonMail />
  </section>
);
