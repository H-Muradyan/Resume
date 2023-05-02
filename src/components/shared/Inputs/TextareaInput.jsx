import React from "react";
import { useSelector } from "react-redux";

const TextareaInput = ({ placeholder, rows, name, value, onChange, errorMessage }) => {
  const mode = useSelector((data) => data.mode);

  return (
    <div>
      <textarea
        className={`${errorMessage[name] && "border-red-700"}  ${
          !mode && "border-black placeholder-darkMode"
        } duration-500 w-full bg-inherit border-b outline-none`}
        value={value[name] || ""}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        name={name}
      />
      <div className="text-red-700">{errorMessage[name]}</div>
    </div>
  );
};

export default TextareaInput;
