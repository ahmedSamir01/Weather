import React from "react";

import { ContextData } from "../Context";

const WeatherData = () => {
  const { weather, city } = React.useContext(ContextData);

  if (weather) {
    return (
      <div className="weather-data">
        <p className="weather__tagline">
          Weather forecast for{" "}
          <span className="weather-data__city">{city}</span>
        </p>
        <div className="weather-data__box">
          <span className="weather-data__property">
            <p className="weather-data__title">Temperature</p>
            <p className="weather-data__value">{weather.temp}</p>
          </span>
          <span className="weather-data__property">
            <p className="weather-data__title">Humidity</p>
            <p className="weather-data__value">{weather.humidity}</p>
          </span>
          <span className="weather-data__property">
            <p className="weather-data__title">Pressure</p>
            <p className="weather-data__value">{weather.pressure}</p>
          </span>
        </div>
      </div>
    );
  } else {
    return <div className="error">Please enter the name of the city</div>;
  }
};

export default WeatherData;
