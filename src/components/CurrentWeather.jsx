import React, { useState } from "react";

export default function CurrentWeather(props) {
  const [weatherConditions, getWeatherConditions] = useState({
    temp: "",
    weatherDesc: "",
    icon: "",
    humidity: "",
    wind: "",
  });
  const [imperialTemp, showImperialTemp] = useState(true);

  //console.log(props.currentTemp);

  function handleFarenheit() {
    let fahrenheitTemp = Math.round((props.currentTemp * 9) / 5 + 32);
    getWeatherConditions({ temp: fahrenheitTemp });
  }

  if (imperialTemp) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <ul className="">
                <li className="currentTemp">
                  <span className="">{props.currentTemp}</span>
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
          </div>
          <div className="row"></div>
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
                <li className="currentTemp">
                  <span className="">{`${weatherConditions.temp} `}</span>
                  <span
                    onClick={() => {
                      showImperialTemp(true);
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
          </div>
          <div className="row"></div>
        </div>
      </>
    );
  }
}
