import React from "react";

export default function CurrentWeather(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <ul className="">
              {/* <li>{props.day}</li> */}
              <li className="currentTemp">{props.currentTemp}</li>
              <li className="currentCity">{props.currentLocation}</li>
              <li className="currentWeatherDesc">{props.currentWeatherDesc}</li>
              <li>
                <img className="icon" src={props.icon} alt="" />
              </li>
              <li className="currentHumidity">{props.currentHumidity}</li>
              <li className="currentWind">{props.currentWind}</li>
            </ul>
          </div>
          <div className="col-md p-2">
            <canvas></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
