import React from "react";
import { socialPages } from "./const";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Social = () => {
  const mode = useSelector((data) => data.mode);

  return (
    <div className="space-x-3 md:space-x-5 text-center">
      {socialPages.length &&
        socialPages.map(({ id, icon, title, link }) => (
          <Link
            key={id}
            className={`${mode ? "hover:text-black" : "hover:text-white"}`}
            aria-label={title}
            target="_blank"
            to={link}
          >
            {icon}
          </Link>
        ))}
    </div>
  );
};

export default Social;
