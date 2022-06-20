export default function ForecastDates(props) {
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

  return <span className="fw-bold">{forecastWeekDay}</span>;
}
