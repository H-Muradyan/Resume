import React from "react";
import { icons } from "../const";
import useWeather from "../../redux/actions/useWeather";

const Info = ({weather}) => {
  const { getDate } = useWeather();

  return (
    <div className="flex flex-col items-center">
      <img
        width={100}
        height={100}
        src={icons[weather.weather[0].icon]}
        alt={weather.weather[0].description}
      />
      <p className="font-semibold">{weather.weather[0].description}</p>
      <p className="my-5 text-3xl font-bold">{weather.name}</p>
      <p className="text-6xl font-bold mb-5">{weather.main.temp.toFixed()}°C</p>
      <p>{getDate(weather.dt, weather.timezone)}</p>
    </div>
  );
};

export default Info;
