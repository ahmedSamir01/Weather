import React from "react";

export const ContextData = React.createContext();

export function ContextProvider(props) {
  const [city, setCity] = React.useState("");
  const [weather, setWeather] = React.useState("");

  return (
    <ContextData.Provider value={{ city, setCity, weather, setWeather }}>
      {props.children}
    </ContextData.Provider>
  );
}
