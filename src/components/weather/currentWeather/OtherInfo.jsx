import React from "react";

const OtherInfo = ({ icon, title, value }) => {

  return (
    <div className="flex space-x-4 items-center">
      <img width={32} height={32} src={icon} alt={title} />
      <div className="flex-col">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-xl">{value}</p>
      </div>
    </div>
  );
};

export default OtherInfo;
