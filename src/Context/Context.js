import React, { useContext, useReducer } from "react";

import { WeatherReducer } from "./Reducer";

const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WeatherReducer, {
    city: {
      city: "Nāgpur",
      lat: "21.1539",
      lng: "79.0831",
      country: "India",
      iso2: "IN",
      admin_name: "Mahārāshtra",
      capital: "",
      population: "2405665",
      population_proper: "2405665",
    },
    current: "",
    daily: "",
  });

  return (
    <>
      <WeatherAPPContext.Provider value={{ state, dispatch }}>
        {children}
      </WeatherAPPContext.Provider>
    </>
  );
};

export default WeatherAPPProvider;

export const UseWeatherAPPContext = () => {
  return useContext(WeatherAPPContext);
};
