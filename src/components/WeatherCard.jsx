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
            Enter
          </Button>
        </InputGroup>
      </Form>

      <Container>
        <Row className="justify-content-center">
          <Card className="weatherContainer shadow">
            <Card.Body>
              <Row className="currentWeatherContainer">
                <CurrentWeather
                  day="Sunday"
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