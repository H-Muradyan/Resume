import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectMode } from "../redux/features/modeSlice";

const MobileNavbar = ({ pages, showMobNav }) => {
  const mode = useSelector(selectMode);

  return (
    <nav
      className={`${
        showMobNav ? "translate-y-0" : " -translate-y-96"
      } absolute w-full duration-500 flex flex-col ${mode ? "bg-darkMode" : "bg-lightMode"}`}
    >
      {pages.map(({ id, text, path }) => (
        <Link
          className={`${
            mode ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"
          } cursor-pointer w-full text-center py-3`}
          color="black"
          display="flex"
          to={path}
          key={id}
          aria-label={text}
        >
          {text}
        </Link>
      ))}
    </nav>
  );
};

export default MobileNavbar;
