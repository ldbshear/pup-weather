import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CurrentWeather from "./CurrentWeather";

export default function WeatherCard() {
  return (
    <>
      <Form className="">
        <InputGroup className="mb-3 w-50 mx-auto">
          <FormControl
            size="lg"
            type="text"
            placeholder="Enter city"
            aria-label="Enter city"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-info" id="button-addon2">
            Enter
          </Button>
        </InputGroup>
      </Form>
      <Container>
        <Row className="justify-content-center">
          <Card className="weatherContainer">
            <Card.Body>
              <Row className="currentWeatherContainer">
                <CurrentWeather
                  day="Sunday"
                  currentTemp="27"
                  currentLocation="Norwalk"
                  currentWeatherDesc="Sunny"
                  icon="🌞"
                  currentHumidity="20%"
                  currentWind="8mph"
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
