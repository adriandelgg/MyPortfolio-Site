import { FiGithub, FiLinkedin } from "react-icons/fi";
import { animated, useTrail } from "@react-spring/web";
import { GITHUB_URL, LINKEDIN_URL } from "@/config/constants";

export const Socials = () => {
  const trails = useTrail(4, {
    from: { y: -30, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 2500
  });

  return (
    <>
      <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
        <animated.li style={trails[0]}>
          <FiGithub className="social-img animation" size="1.5em" color="#c8d3f0" />
        </animated.li>
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">
        <animated.li style={trails[1]}>
          <FiLinkedin className="social-img animation" size="1.5em" color="#c8d3f0" />
        </animated.li>
      </a>
    </>
  );
};
