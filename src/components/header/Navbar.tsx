import { MenuMobile } from "./MenuMobile";
import { useIsMobile } from "@/hooks/useIsMobile";
import { NavItems } from "./NavItems";

export const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="flex items-center justify-between">
      {isMobile ? <MenuMobile /> : <NavItems />}
    </nav>
  );
};
