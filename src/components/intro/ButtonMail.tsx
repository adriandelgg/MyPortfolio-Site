import { animated, useSpring } from "@react-spring/web";
import { Button } from "@mui/material";
import { EMAIL_URL, GOLD_COLOR } from "@/config/constants";
import EmailIcon from "@mui/icons-material/Email";

export const ButtonMail = () => {
  const styles = useSpring({
    from: { y: 30, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 2400
  });

  const AnimatedButton = animated(Button);

  return (
    <a href={`mailto:${EMAIL_URL}`}>
      <AnimatedButton
        sx={{
          backgroundColor: "#181c3a",
          borderColor: GOLD_COLOR,
          color: GOLD_COLOR,
          marginBottom: "2.5em",
          borderRadius: "0.6em"
        }}
        style={styles}
        className="resume-btn"
        variant="outlined"
        endIcon={<EmailIcon />}
      >
        Contact me
      </AnimatedButton>
    </a>
  );
};
