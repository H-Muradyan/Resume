import React from "react";
import WeatherForm from "./WeatherForm";
import CurrentWeather from "./currentWeather";
import { useSelector } from "react-redux";

const WeatherPage = () => {
  const mode = useSelector((data) => data.mode);

  return (
    <div
      className={`${
        mode ? "bg-darkMode" : "bg-lightModeWeather"
      } duration-500 rounded-xl relative flex flex-col py-8 shadow-2xl`}
    >
      <h4 className="text-2xl mb-5 text-center font-bold">Projects</h4>
      <WeatherForm />
      <CurrentWeather />
    </div>
  );
};

export default WeatherPage;
