import React from "react";
import WeatherForm from "./WeatherForm";
import PageContainer from "../shared/pageContainer";
import CurrentWeather from "./currentWeather";

const WeatherPage = () => {
  return (
    <PageContainer>
      <div className="px-4 flex flex-col">
        <h4 className="text-2xl mb-5 text-center font-bold">Projects</h4>
        <WeatherForm />
        <CurrentWeather />
      </div>
    </PageContainer>
  );
};

export default WeatherPage;
