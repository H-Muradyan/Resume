import React from "react";
import cvImg from "../../assets/images/cvImg.webp";
import Information from "../shared/information";
import { personInfos } from "./const";
import { useSelector } from "react-redux";

const Profile = () => {
  const mode = useSelector((data) => data.mode);

  return (
    <div className={`${mode ? "bg-darkMode" : "bg-lightMode"} duration-500 rounded-xl pt-8 shadow-2xl`}>
      <h3 className="pl-4 text-2xl font-bold">Hrachya Muradyan</h3>
      <h4 className="pl-4 text-xl font-medium mt-4">Front-End Developer</h4>
      <img className="my-7" src={cvImg} alt="profile picture" width="100%" height={10} />
      <div>
        {personInfos.map((info) => (
          <Information key={info.id} data={info} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
