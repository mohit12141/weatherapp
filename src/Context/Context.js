import React, { useContext, useReducer } from "react";

import {WeatherReducer} from './Reducer';

const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({children}) => {
    const [state,dispatch] = useReducer(WeatherReducer,{
        city : '',
        current : '',
        daily : ''
    })
    
    return <>
        <WeatherAPPContext.Provider value={{state, dispatch}}>
            {children}
        </WeatherAPPContext.Provider>
    </>
};

export default WeatherAPPProvider;

export const UseWeatherAPPContext = () => {
    return useContext(WeatherAPPContext);
};