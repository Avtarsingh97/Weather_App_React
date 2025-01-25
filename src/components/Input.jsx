import React from 'react';
import {useWeather} from "../Context/Weather"

const Input = (props)=>{
  const weather = useWeather();


  return(
    <input className={props.className} placeholder="Search City Here" value={weather.searchCity} onChange={(e)=>weather.setSearchCity(e.target.value)} />
  );
};

export default Input;