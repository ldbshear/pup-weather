//import React from "react";

export default function ForecastDates(props) {
  //     let day = weatherTime.getDay();
  //   let week = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];
  //   day = week[weatherTime.getDay()];

  let weekDay = props.day;
  let forecastWeekDay = weekDay.getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  forecastWeekDay = week[weekDay.getDay()];

  //   console.log(weekDay);
  return forecastWeekDay;
}
