import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import ForecastDates from "./ForecastDates";
import WeekdayForecast from "./WeekdayForecast";

export default function CurrentWeather(props) {
  const [weatherConditions, getWeatherConditions] = useState({
    temp: "",
    weatherDesc: "",
    icon: "",
    humidity: "",
    wind: "",
  });
  const [imperialTemp, showImperialTemp] = useState(true);
  const [forecast, setForecast] = useState([]);

  function getForecast(response) {
    const forecast = response.data.data;
    let sevenDay = forecast.slice(1, 6);
    setForecast(sevenDay);
  }

  useEffect(() => {
    const weatherApi = () => {
      let userCity = props.currentLocation;
      const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${userCity}&country=&state=&key=c0d88077a0b9403e8ad42fe14557f5f9`;

      axios
        .get(forecastUrl)
        .then(getForecast)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    };
    weatherApi();
  }, [props.currentLocation]);

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
          <div className="row">
            <CardGroup>
              {forecast.map((day) => {
                const {
                  ts,
                  weather,
                  high_temp,
                  min_temp,
                  valid_date,
                  sunrise_ts,
                } = day;
                return (
                  <Card key={sunrise_ts} className="bg-transparent border-0">
                    <Card.Body className="mx-auto mt-5">
                      <ForecastDates day={new Date(ts * 1000)} />
                      <WeekdayForecast
                        forecastDate={valid_date}
                        src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`}
                        hiTemp={`${Math.round(high_temp)}`}
                        loTemp={`${Math.round(min_temp)}`}
                      />
                    </Card.Body>
                  </Card>
                );
              })}
            </CardGroup>
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
          <div className="row">
            <CardGroup>
              {forecast.map((day) => {
                const {
                  ts,
                  weather,
                  high_temp,
                  min_temp,
                  valid_date,
                  sunrise_ts,
                } = day;
                return (
                  <Card key={sunrise_ts} className="bg-transparent border-0">
                    <Card.Body className="mx-auto">
                      <ForecastDates day={new Date(ts * 1000)} />
                      <WeekdayForecast
                        forecastDate={valid_date}
                        src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`}
                        hiTemp={`${Math.round((high_temp * 9) / 5 + 32)}`}
                        loTemp={`${Math.round((min_temp * 9) / 5 + 32)}`}
                      />
                    </Card.Body>
                  </Card>
                );
              })}
            </CardGroup>
          </div>
        </div>
      </>
    );
  }
}
