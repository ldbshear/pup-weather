import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CurrentWeather from "./CurrentWeather";
import DateNTime from "./DateNTime";
//import GeoLocation from "./GeoLocation";

export default function WeatherCard() {
  const [userCity, showUserCity] = useState("");
  const [location, showLocation] = useState("");
  const [weatherConditions, getWeatherConditions] = useState({
    temp: "",
    weatherDesc: "",
    icon: "",
    humidity: "",
    wind: "",
  });

  function getWeather(response) {
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
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      alert(
        `you are at a latitude pos of ${lat} and a longitude pos of ${lon}`
      );
    });
  }

  function requestData(userCity) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=4d52faf0671d8976c45e49132852bc77&units=metric`;
    //Forecast let url = `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&appid=4d52faf0671d8976c45e49132852bc77&units=metric`;

    axios
      .get(url)
      .then(getWeather)
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
                  currentTemp={`${Math.floor(weatherConditions.temp)}°C`}
                  currentLocation={location}
                  currentWeatherDesc={weatherConditions.weatherDesc}
                  icon={`http://openweathermap.org/img/w/${weatherConditions.icon}.png`}
                  currentHumidity={`${weatherConditions.humidity}% Humidity`}
                  currentWind={`${weatherConditions.wind} MPH wind speed`}
                />
              </Row>
              <Row className="forecastWeatherContainer">Weather Forecast</Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
