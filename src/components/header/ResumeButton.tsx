import { GOLD_COLOR, RESUME_URL } from "@/config/constants";
import { Button } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

type Props = {
  isMobile?: boolean;
  setOpen?: () => void;
};

export const ResumeButton = ({ isMobile, setOpen }: Props) => {
  const styles = isMobile
    ? { backgroundColor: GOLD_COLOR, color: "black" }
    : { backgroundColor: "#181c3a", color: GOLD_COLOR, borderColor: GOLD_COLOR };

  return (
    <Button
      className="btn-hover"
      variant={isMobile ? "contained" : "outlined"}
      sx={{ borderRadius: "0.6em", ...styles }}
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      endIcon={<DescriptionOutlinedIcon />}
      onClick={setOpen}
    >
      Resume
    </Button>
  );
};
