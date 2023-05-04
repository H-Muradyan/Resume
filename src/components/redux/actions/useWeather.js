import React from "react";
import { useDispatch } from "react-redux";
import { currentWeather } from "../../api/weather";
import { toast } from "react-toastify";

const useWeather = () => {
  const dispatch = useDispatch();

  const getCurrentWeather = async (city) => {
    try {
      const res = await currentWeather(city);
      if (res.data) {
        dispatch({
          type: "GET_WEATHER",
          payload: res.data,
        });
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const getDate = (dt, timezone) => {
    const utcSeconds = parseInt(dt, 10) + parseInt(timezone, 10);
    const utcMilliseconds = utcSeconds * 1000;
    const localDate = new Date(utcMilliseconds).toUTCString();
    return localDate;
  };

  return { getCurrentWeather, getDate };
};

export default useWeather;
