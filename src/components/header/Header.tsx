import { Navbar } from "./Navbar";
import { RiCodeSSlashFill } from "react-icons/ri";

export const Header = () => (
  <header className="mx-auto my-0 flex h-16 w-[95%] items-center justify-between">
    <RiCodeSSlashFill
      className="animate-[logo_1s_ease-out_forwards] cursor-pointer"
      size="2em"
      color="#f7bb50"
    />
    <Navbar />
  </header>
);
