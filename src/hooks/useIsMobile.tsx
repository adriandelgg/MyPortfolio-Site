import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => setIsMobile(window.innerWidth <= 709);

  // Checks if screen size is mobile on load.
  useEffect(() => checkIsMobile(), []);

  // Checks for mobile size.
  useEffect(() => {
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  });

  return isMobile;
}
