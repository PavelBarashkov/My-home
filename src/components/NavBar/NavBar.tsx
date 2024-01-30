import { useEffect, useState } from "react";
import { NavBarDesktop } from "../NavBarDesktop/NavBarDesktop";
import { NavBarMobile } from "../NavBarMobile/NavBarMobile";

export const NavBar = () => {
  const [sizeWindow, setSizeWindow] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSizeWindow(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{sizeWindow < 992 ? <NavBarMobile /> : <NavBarDesktop />}</>;
};
