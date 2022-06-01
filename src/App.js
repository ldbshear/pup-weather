import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Button variant="outline-success">Success</Button> */}
      <WeatherCard />
    </div>
  );
}

export default App;
