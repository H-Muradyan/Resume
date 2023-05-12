import React from "react";

const Progress = ({ data }) => {
  const { language, percent } = data;
  return (
    <div className="max-w-full py-5 mr-14">
      <p className="pb-2 font-semibold">{language}</p>
      <div className="flex items-center">
        <div className="w-56 h-4 rounded-3xl bg-gray-800 overflow-hidden">
          <div
            style={{ width: percent }}
            className={`h-full bg-gradient-to-r from-blue-400 to-green-500`}
          />
        </div>
        <small>
          <i className="ml-2">{percent}</i>
        </small>
      </div>
    </div>
  );
};

export default Progress;
