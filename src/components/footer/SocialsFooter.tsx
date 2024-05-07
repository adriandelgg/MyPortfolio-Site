import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from "@/config/constants";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const SocialsFooter = () => (
  <div className="mx-[10em] flex items-center justify-center">
    <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
      <FiGithub className="social-footer animation" size="1.5em" color="white" />
    </a>
    <a href={`mailto:${EMAIL_URL}`}>
      <FiMail className="social-footer animation" size="1.6em" color="white" />
    </a>
    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">
      <FiLinkedin className="social-footer animation" size="1.5em" color="white" />
    </a>
  </div>
);
