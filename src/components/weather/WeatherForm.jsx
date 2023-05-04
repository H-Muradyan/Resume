import React, { useEffect, useState } from "react";
import useForm from "../shared/useForm";
import TextInput from "../shared/Inputs/TextInput";
import { validators } from "../shared/validators";
import useWeather from "../redux/actions/useWeather";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
const WeatherForm = () => {
  const [data, setData] = useState({
    location: "",
  });
  const { getCurrentWeather } = useWeather();

  useEffect(() => {
    getCurrentWeather("Yerevan");
  }, []);

  const onSubmit = () => {
    getCurrentWeather(value.location);
  };

  const { value, onChange, handleSubmit, errorMessage } = useForm(onSubmit, validators, data);

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
      <button type="submit">
        <LocationSearchingIcon fontSize="large"/>
      </button>
    </form>
  );
};

export default WeatherForm;
