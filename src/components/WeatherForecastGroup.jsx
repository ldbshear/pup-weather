import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import WeatherCard from "./WeatherCard";
import WeatherForecastCard from "./WeatherForecastCard";

export default function WeatherForecastGroup() {
  return (
    <>
      <CardGroup>
        <h4>Printed</h4>
        {/* <WeatherForecastCard loTemp={cityForecast.loTemp} /> */}
      </CardGroup>
      ;
    </>
  );
}
