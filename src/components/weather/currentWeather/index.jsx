import React from "react";
import { useSelector } from "react-redux";

import humidity from "../../../assets/icons/humidity.png";
import pressure from "../../../assets/icons/pressure.png";
import wind from "../../../assets/icons/wind.png";

import OtherInfo from "./OtherInfo";
import Info from "./Info";

const CurrentWeather = () => {
  const weather = useSelector((data) => data.weather);


  return (
    <div className="flex justify-center lg:justify-between space-x-7 space-y-10 flex-wrap">
      {Object.keys(weather).length && (
        <>
          <Info weather={weather} />
          <div className="flex flex-col justify-end space-y-10">
            <OtherInfo icon={humidity} title="Humidity" value={`${weather.main.humidity} %`} />
            <OtherInfo icon={pressure} title="Air Pressure" value={`${weather.main.pressure} PS`} />
            <OtherInfo icon={wind} title="Wind Speed" value={`${weather.wind.speed} km/h`} />
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
