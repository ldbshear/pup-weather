import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CurrentWeather from "./CurrentWeather";
import DateNTime from "./DateNTime";
import ForecastDates from "./ForecastDates";

export function userInputCity(city) {
  return city;
}

export default function WeatherCard(props) {
  const [userCity, showUserCity] = useState("");
  const [location, showLocation] = useState("");
  const [weatherConditions, getWeatherConditions] = useState({
    temp: "",
    weatherDesc: "",
    icon: "",
    humidity: "",
    wind: "",
  });
  const [forecast, setForecast] = useState([]);

  function getForecast(response) {
    const forecast = response.data.data;
    let sevenDay = forecast.slice(1, 6);
    setForecast(sevenDay);
    console.log(sevenDay);
  }

  useEffect(() => {
    const weatherApi = (location) => {
      let userCity = location;
      const forecastUrl = `https://api.weather0bit.io/v2.0/forecast/daily?city=${userCity}&country=&state=&key=c0d88077a0b9403e8ad42fe14557f5f9`;
      console.log(forecastUrl);
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
    weatherApi(location);
  }, [location]);

  function getWeatherCelsius(response) {
    console.log(response);
    getWeatherConditions({
      temp: response.data.main.temp,
      weatherDesc: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function updateLocation(event) {
    showUserCity(event.target.value);
  }

  function handleCurrentClick() {
    console.log("click click");
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(lat);
    let url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=4d52faf0671d8976c45e49132852bc77`;
    axios
      .get(url)
      .then(getCityName)
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
  }

  function getCityName(response) {
    console.log(response);
    let cityName = response.data[0].name;
    showLocation(cityName);
    requestData(cityName);
  }

  function requestData(userCity) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=4d52faf0671d8976c45e49132852bc77&units=metric`;

    axios
      .get(url)
      .then(getWeatherCelsius)
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
  }

  return (
    <>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("submitted");
          showLocation(userCity);
          requestData(userCity);
        }}
        className=""
      >
        <InputGroup className="mb-3 w-50 mx-auto">
          <FormControl
            className="userLocation"
            size="lg"
            type="text"
            placeholder="Enter city"
            onChange={(event) => {
              updateLocation(event);
            }}
            value={userCity}
            aria-label="Enter city"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-info" id="button-addon2" type="submit">
            Search
          </Button>
          <button
            type="button"
            class="btn btn-outline-info"
            onClick={handleCurrentClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house-heart"
              viewBox="0 0 16 16"
            >
              <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z" />
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
            </svg>
          </button>
        </InputGroup>
      </Form>

      <Container>
        <Row className="justify-content-center">
          <Card className="weatherContainer shadow">
            <Card.Body>
              <DateNTime />
              <Row className="currentWeatherContainer ">
                <CurrentWeather
                  currentTemp={`${Math.floor(weatherConditions.temp)}° `}
                  currentLocation={location.toUpperCase()}
                  currentWeatherDesc={weatherConditions.weatherDesc}
                  icon={`http://openweathermap.org/img/w/${weatherConditions.icon}.png`}
                  currentHumidity={`${weatherConditions.humidity}% Humidity`}
                  currentWind={`${weatherConditions.wind} MPH wind speed`}
                />
              </Row>
              <Row>
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
                      <Card
                        key={sunrise_ts}
                        className="bg-transparent border-right"
                      >
                        <Card.Body className="mx-auto">
                          <ul>
                            <li className="forecastDay">{valid_date}</li>
                            {/* <li className="forecastDay">{datetime}</li> */}
                            <ForecastDates day={new Date(ts * 1000)} />
                            <li className="text-center">
                              <img
                                className="forecastImg"
                                src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`}
                                alt=""
                              />
                            </li>
                            <li className="forecastMaxMin text-center">
                              <span className="fs-4 fw-bold align-top">
                                {`${Math.round(high_temp)}`}°
                              </span>
                              <span className="fs-5 align-top">
                                /{`${Math.round(min_temp)}`}°
                              </span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </CardGroup>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
