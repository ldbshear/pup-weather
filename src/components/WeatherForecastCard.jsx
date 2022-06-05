import React from "react";

export default function WeatherForecastCard(){
    return (
      <Card className="bg-transparent">
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
    );
}