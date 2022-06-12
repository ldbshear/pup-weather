import React, { useState, useContext } from "react";
import axios from "axios";

export default function CurrentWeather(props) {
  const [weatherConditions, getWeatherConditions] = useState({
    temp: "",
    weatherDesc: "",
    icon: "",
    humidity: "",
    wind: "",
  });
  const [imperialTemp, showImperialTemp] = useState(true);
  let imperial = true;

  function handleFarenheit() {
    // let temp = props.currentTemp;
    // let convertF = (temp * 9) / 5 + 32;
    // console.log();
    // temp = convertF;
    // console.log(convertF);
    // showImperialTemp(convertF);

    weatherConditions.temp = (props.currentTemp * 9) / 5 + 32;
    getWeatherConditions({ temp: weatherConditions.temp });
    console.log(weatherConditions.temp);
  }

  function handleToggle() {
    "testing";
  }

  if (imperialTemp) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <ul className="">
                {/* <li>{props.day}</li> */}
                <li className="currentTemp">
                  <span className="units">{props.currentTemp}</span>
                  <span onClick={""} className="units">
                    C
                  </span>
                  <span
                    onClick={() => {
                      showImperialTemp(false);
                      handleFarenheit();
                    }}
                    className="units"
                  >
                    |F
                  </span>
                </li>
                <li className="currentCity">{props.currentLocation}</li>
                <li className="currentWeatherDesc">
                  {props.currentWeatherDesc}
                </li>
                <li>
                  <img className="icon" src={props.icon} alt="" />
                </li>
                <li className="currentHumidity">{props.currentHumidity}</li>
                <li className="currentWind">{props.currentWind}</li>
              </ul>
            </div>
            <div className="col-md p-2"></div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <ul className="">
                {/* <li>{props.day}</li> */}
                <li className="currentTemp">
                  <span className="units">{weatherConditions.temp}</span>
                  <span
                    onClick={() => {
                      showImperialTemp(true);
                      //handleFarenheit();
                    }}
                    className="units"
                  >
                    C
                  </span>
                  <span onClick={handleFarenheit} className="units">
                    |F
                  </span>
                </li>
                <li className="currentCity">{props.currentLocation}</li>
                <li className="currentWeatherDesc">
                  {props.currentWeatherDesc}
                </li>
                <li>
                  <img className="icon" src={props.icon} alt="" />
                </li>
                <li className="currentHumidity">{props.currentHumidity}</li>
                <li className="currentWind">{props.currentWind}</li>
              </ul>
            </div>
            <div className="col-md p-2"></div>
          </div>
        </div>
      </>
    );
  }
}
