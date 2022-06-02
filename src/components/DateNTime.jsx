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
      <ul>
        <li className="mt-3">{`${day} ${month} ${date} `}</li>
      </ul>
    </>
  );
}
