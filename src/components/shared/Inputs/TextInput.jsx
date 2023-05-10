import React from "react";
import { useSelector } from "react-redux";
import { selectMode } from "../../redux/features/modeSlice";

const TextInput = ({ type, placeholder, rows, name, value, onChange, errorMessage }) => {
  const mode = useSelector(selectMode);

  return (
    <div>
      <input
        className={`${errorMessage[name] && "border-red-700"} w-full bg-inherit border-b ${
          !mode && "border-black placeholder-darkMode"
        } duration-500 outline-none pb-1`}
        value={value[name] || ""}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        rows={rows}
        name={name}
        required
      />
      <div className="text-red-700">{errorMessage[name]}</div>
    </div>
  );
};

export default TextInput;
