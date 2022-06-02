import React from "react";

export default function DateNTime() {
  const weatherTime = new Date();
  let day = weatherTime.getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day = week[weatherTime.getDay()];
  return (
    <>
      <h3>{day}</h3>
    </>
  );
}
