import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

export default function WeatherForecastGroup() {
  return (
    <>
      <CardGroup>
        
        <Card className="bg-transparent">
          <Card.Body>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      ;
    </>
  );
}
