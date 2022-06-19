import React from "react";

export default function WeekdayForecast(props) {
  return (
    <>
      <ul>
        <li className="forecastDay">{props.forecastDate}</li>
        <li className="text-center">
          <img className="forecastImg" src={props.src} alt="" />
        </li>
        <li className="forecastMaxMin text-center">
          <span className="fs-4 fw-bold align-top">{props.hiTemp}°</span>
          <span className="fs-5 align-top">/{props.loTemp}°</span>
        </li>
      </ul>
    </>
  );
}
