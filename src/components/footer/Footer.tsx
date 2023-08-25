import { SocialsFooter } from "./SocialsFooter";
import { HiArrowUp } from "react-icons/hi";

export const Footer = () => (
  <footer>
    <h3 id="contact" className="contact-me">
      Want to work together?
      <br />
      Contact me!
    </h3>
    <div className="socials-footer">
      <SocialsFooter />
    </div>
    <h5 className="footer-text">
      © Created by Adrian Delgado {new Date().getFullYear()}
    </h5>
    <div className="backup-arrow animation">
      <a
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
      >
        <HiArrowUp size="3em" color="#fdfdfd" />
      </a>
    </div>
  </footer>
);
