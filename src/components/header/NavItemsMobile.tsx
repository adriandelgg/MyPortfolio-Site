import type { Dispatch, SetStateAction } from "react";
import { ResumeButton } from "@/components/header/ResumeButton";

type Props = { setOpen: Dispatch<SetStateAction<boolean>> };

export const NavItemsMobile = ({ setOpen }: Props) => {
  function handleClick(id: string) {
    setOpen(false);
    document?.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ul id="mobile-nav" className="nav-links animate-mobile animate-back-in">
      <li className="nav-link">
        <a onClick={() => handleClick("skills")}>Skills</a>
      </li>
      <li className="nav-link">
        <a onClick={() => handleClick("projects")}>Projects</a>
      </li>
      <li className="nav-link">
        <a onClick={() => handleClick("contact")}>Contact</a>
      </li>
      <li className="btn-hover">
        <ResumeButton isMobile setOpen={() => setOpen(false)} />
      </li>
    </ul>
  );
};
