import React from "react";
import "./App.css";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherCard />
      <Footer />
    </div>
  );
}

export default App;
