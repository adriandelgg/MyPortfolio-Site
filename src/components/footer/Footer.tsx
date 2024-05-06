import { SocialsFooter } from "./SocialsFooter";
import { HiArrowUp } from "react-icons/hi";
import { GOLD_COLOR } from "@/config/constants";

export const Footer = () => (
  <footer className="h-40">
    <h3 id="contact" className="mb-4 mt-8 text-center">
      Want to work together?
      <br />
      Contact me!
    </h3>
    <SocialsFooter />
    <h5 className="mt-3 text-center">
      © Created by Adrian Delgado {new Date().getFullYear()}
    </h5>
    <div
      className="mx-auto mb-2 mt-8 w-fit cursor-pointer text-center"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
    >
      <HiArrowUp size="3em" color={GOLD_COLOR} />
    </div>
  </footer>
);
