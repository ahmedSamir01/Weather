import React from "react";
import axios from "axios";
import { ContextData } from "../Context";

const WeatherSearch = () => {
  const { setWeather, setCity } = React.useContext(ContextData);
  const ValRef = React.useRef();

  const [tranzit, setTranzit] = React.useState("");

  const handleChange = (e) => {
    setTranzit(ValRef.current.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (tranzit) {
      const request = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${tranzit}&appid=9c3cb98520f309bd159e77512e8e5e28&units=metric`
      );
      const response = await request;
      setWeather(response.data.main);
      setCity(response.data.name);
    } else {
      setCity(null);
      setWeather(null);
    }
    setTranzit("");
  };

  return (
    <div className="weather-search">
      <form className="weather-search__form" onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          ref={ValRef}
          name="city"
          className="weather-search__input"
          type="text"
          value={tranzit}
          onChange={handleChange}
        />
        <div className="weather-search__submit">
          <button className="weather-search__button">&rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
