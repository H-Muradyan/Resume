import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { pages } from "./const";
import MobileNavbar from "./MobileNavbar";
import useWidth from "../hooks/useWidth";
import Social from "../shared/social";
import MenuIcon from "@mui/icons-material/Menu";
import useMode from "../redux/actions/useMode";
import { useSelector } from "react-redux";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
  const [showMobNav, setShowMobNav] = useState(null);
  const myRef = useRef();
  const widthSize = useWidth();
  const { changeMode } = useMode();

  const mode = useSelector((data) => data.mode);

  const openMobileNav = () => {
    setShowMobNav((prev) => !prev);
  };

  useEffect(() => {
    const closeMobileNav = (e) => {
      if (widthSize < 768 && myRef.current.id !== e.target.id) {
        setShowMobNav(false);
      }
    };
    document.body.addEventListener("click", closeMobileNav);
    return () => document.body.removeEventListener("click", closeMobileNav);
  }, [widthSize]);

  return (
    <header className={`${mode ? "bg-darkMode" : "bg-lightMode"} duration-500 elative shadow-2xl`}>
      <div className="flex items-center justify-between h-24 max-w-screen-2xl m-auto px-6 md:px-10 lg:px-20">
        {widthSize < 768 ? (
          <MenuIcon
            color="palette.primary.dark"
            className="cursor-pointer"
            id="hamburger"
            ref={myRef}
            onClick={openMobileNav}
            fontSize="large"
          />
        ) : (
          <Navbar pages={pages} mode={mode} />
        )}
        <div className="flex items-center space-x-3 md:space-x-5">
          <Social />
          <LightModeIcon className={`${mode ? "hover:text-black" : "hover:text-white"} cursor-pointer`} fontSize="large" onClick={changeMode} />
        </div>
      </div>
      {widthSize < 768 && <MobileNavbar pages={pages} showMobNav={showMobNav} />}
    </header>
  );
};

export default Header;
