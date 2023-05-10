import React, { useEffect, useState } from "react";
import useForm from "../shared/useForm";
import TextInput from "../shared/Inputs/TextInput";
import { validators } from "../shared/validators";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import { useDispatch } from "react-redux";
import { getCurrentWeather } from "../redux/features/weatherSlice";

const WeatherForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentWeather("Yerevan"));
  }, []);

  const onSubmit = () => {
    dispatch(getCurrentWeather(value.location));
  };

  const { value, onChange, handleSubmit, errorMessage } = useForm(onSubmit, validators);

  return (
    <form className="h-16 flex space-x-5 items-start justify-center" onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Location"
        name="location"
        errorMessage={errorMessage}
      />
      <button aria-label="search city" type="submit">
        <span>
          <LocationSearchingIcon fontSize="large" />
        </span>
      </button>
    </form>
  );
};

export default WeatherForm;
