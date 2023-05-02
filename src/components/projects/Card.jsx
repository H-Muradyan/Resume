import React from "react";

const Card = ({ project, handleOpen }) => {
  const { title, image } = project;
  return (
    <div
      onClick={handleOpen}
      className="relative max-w-sm col-span-4 md:col-span-6 md:col-start-2 lg:col-span-4 cursor-pointer place-self-center mb-7 hover:scale-105 duration-300"
    >
      <img className="h-48 rounded-xl w-full" src={image} alt={title} />
      <div className="absolute px-3 py-1 bottom-0 bg-darkMode rounded-b-xl text-xl z-20 w-full">
        <h4 className="truncate text-white">{title}</h4>
      </div>
    </div>
  );
};

export default Card;
