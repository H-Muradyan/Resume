import React from "react";
import { useSelector } from "react-redux";

import humidityWhite from "../../../assets/icons/humidityWhite.png";
import humidityBlack from "../../../assets/icons/humidityBlack.png";
import pressureWhite from "../../../assets/icons/pressureWhite.png";
import pressureBlack from "../../../assets/icons/pressureBlack.png";
import windWhite from "../../../assets/icons/windWhite.png";
import windBlack from "../../../assets/icons/windBlack.png";

import OtherInfo from "./OtherInfo";
import Info from "./Info";
import { bgImages } from "../const";

const CurrentWeather = () => {
  const weather = useSelector((data) => data.weather);
  const mode = useSelector((data) => data.mode);

  return (
    <div className="flex justify-center lg:justify-between space-y-10 flex-wrap">
      {Object.keys(weather).length && (
        <>
          <img
            width="100%"
            height="100%"
            className="absolute top-0 -z-10 h-full rounded-xl"
            src={bgImages[[weather.weather[0].icon]]}
            alt="asd"
          />
          <Info weather={weather} />
          <div className="flex flex-col justify-end space-y-10 px-4">
            <OtherInfo
              icon={mode ? humidityWhite : humidityBlack}
              title="Humidity"
              value={`${weather.main.humidity} %`}
            />
            <OtherInfo
              icon={mode ? pressureWhite : pressureBlack}
              title="Air Pressure"
              value={`${weather.main.pressure} PS`}
            />
            <OtherInfo
              icon={mode ? windWhite : windBlack}
              title="Wind Speed"
              value={`${weather.wind.speed} km/h`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
