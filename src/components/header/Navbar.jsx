import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ pages, mode }) => {
  const { pathname } = useLocation();

  return (
    <nav className="space-x-8">
      {pages.map(({ id, text, path }) => (
        <Link
          className={`${
            pathname === path && "after:w-full"
          } relative font-medium cursor-pointer after:rounded-3xl after:absolute after:duration-300 ${
            mode ? "after:bg-white" : "after:bg-black"
          } after:h-1 after:w-0 after:left-0 after:-bottom-2 hover:after:w-full`}
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

export default Navbar;
