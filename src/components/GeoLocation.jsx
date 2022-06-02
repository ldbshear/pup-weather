import React, { useState } from "react";
//import axios from "axios";

export default function GeoLocation(props) {
  const [lat, setLatitude] = useState("");
  const [lon, setLongitude] = useState("");
  const [defaultWeather, showDefault] = useState({
    temp: "",
    weatherDesc: "",
    icon: "",
    humidity: "",
    wind: "",
  });

  //navigator.geolocation.getCurrentPosition(showCurrentLocWeather);

  function showCurrentLocWeather(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    //let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4bcd69482e48eff55262cb4ddf9efad9&units=metric`;
    // axios
    //   .get(url)
    //   .then(getGeoWeather)
    //   .catch(function (error) {
    //     if (error.response) {
    //       console.log(error.response.data);
    //       console.log(error.response.status);
    //     } else if (error.request) {
    //       console.log(error.request);
    //     } else {
    //       console.log("Error", error.message);
    //     }
    //     console.log(error.config);
    //   });
  }

  function getGeoWeather(response) {
    showDefault({
      temp: response.data.main.temp,
      weatherDesc: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  return (
    <>
      {/* <p>
        api.openweathermap.org/data/2.5/weather?{lat}&{lon}
        latitude is {lat} and longitude is {lon}
      </p> */}

      <div className="container">
        <div className="row">
          <div className="col-md">
            <ul className="">
              {/* <li>{props.day}</li> */}
              <li className="currentTemp">{defaultWeather.temp}</li>
              <li className="currentCity"></li>
              <li className="currentWeatherDesc">
                {defaultWeather.weatherDesc}
              </li>
              <li>
                <img src={defaultWeather.icon} alt="" />
              </li>
              <li className="currentHumidity">{defaultWeather.humidity}</li>
              <li className="currentWind">{defaultWeather.wind}</li>
            </ul>
          </div>
          <div className="col-md p-2">
            <canvas></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
