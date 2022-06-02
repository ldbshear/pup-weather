import React from "react";
import { Card } from "react-bootstrap";

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
  let date = weatherTime.getDate();
  let month = weatherTime.getMonth();
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  month = monthNames[weatherTime.getMonth()];
  return (
    <>
      <Card.Header>{`${day} ${month} ${date} `}</Card.Header>
    </>
  );
}
