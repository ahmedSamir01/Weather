import React from "react";

import { ContextProvider } from "../Context";
import Header from "./Layout/Header";
import Content from "./Layout/Content";
import DateTime from "./DateTime";
import Tagline from "./Tagline";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";

// will render every component inside the context provide
const Main = () => {
  return (
    <div className="main">
      <Header />
      <Content>
        <ContextProvider>
          <DateTime />
          <Tagline />
          <WeatherSearch />
          <WeatherData />
        </ContextProvider>
      </Content>
    </div>
  );
};

export default Main;
