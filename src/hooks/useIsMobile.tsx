import { useState, useEffect } from "react";

export function useIsMobile(breakpoint: number = 710) {
  const [isMobile, setIsMobile] = useState(false);

  // Checks for mobile size.
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= breakpoint);

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakpoint]);

  return isMobile;
}
