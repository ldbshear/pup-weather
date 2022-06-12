import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

export default function WeatherForecastCard(props) {
  return (
    <CardGroup>
      <Card className="bg-transparent border-right">
        <Card.Body>
          <ul>
            <li>
              <img className="icon" src={props.icon} alt="" />
            </li>
            <li className="forecastTempHi">{props.hiTemp}</li>
            <li className="forecastTempLo">{props.loTemp}</li>
          </ul>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
