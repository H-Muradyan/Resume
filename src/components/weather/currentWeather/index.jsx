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
import { selectMode } from "../../redux/features/modeSlice";
import { selectWeather } from "../../redux/features/weatherSlice";
import Loading from "../../shared/Loading";

const CurrentWeather = () => {
  const weather = useSelector(selectWeather);
  const mode = useSelector(selectMode);

  return (
    <div className="flex justify-center lg:justify-between space-y-10 flex-wrap">
      {weather.loading ? (
        <Loading />
      ) : (
        Object.keys(weather.weather).length && (
          <>
            <img
              width="100%"
              height="100%"
              className="absolute top-0 -z-10 h-full rounded-xl"
              src={bgImages[[weather.weather.weather[0].icon]]}
              alt={weather.weather.weather[0].description}
            />
            <Info weather={weather.weather} />
            <div className="flex flex-col justify-end space-y-10 px-4">
              <OtherInfo
                icon={mode ? humidityWhite : humidityBlack}
                title="Humidity"
                value={`${weather.weather.main.humidity} %`}
              />
              <OtherInfo
                icon={mode ? pressureWhite : pressureBlack}
                title="Air Pressure"
                value={`${weather.weather.main.pressure} PS`}
              />
              <OtherInfo
                icon={mode ? windWhite : windBlack}
                title="Wind Speed"
                value={`${weather.weather.wind.speed} km/h`}
              />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default CurrentWeather;
