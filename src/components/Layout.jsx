import React, { useRef } from "react";
import Header from "./header";
import Profile from "./profile";
import { useSelector } from "react-redux";
import { selectMode } from "./redux/features/modeSlice";

const Layout = ({ children }) => {
  const mode = useSelector(selectMode);

  return (
    <div className={`${mode ? "text-white" : "text-black"} `}>
      <Header />
      <main className="grid gap-x-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 max-w-screen-2xl m-auto mt-10 px-6 md:px-10 lg:px-20">
        <div className="col-span-4 md:col-span-3">
          <Profile />
        </div>
        <div className="col-span-4 md:col-span-5 lg:col-span-9">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
