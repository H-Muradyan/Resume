import React from "react";
import { useSelector } from "react-redux";

const PageContainer = ({ children }) => {
  const mode = useSelector((data) => data.mode);

  return (
    <div
      className={`${
        mode ? "bg-darkMode" : "bg-lightMode"
      } duration-500 rounded-xl mt-8 md:mt-0 py-8 shadow-2xl`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
