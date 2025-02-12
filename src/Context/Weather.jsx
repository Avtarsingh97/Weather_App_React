import {createContext, useContext, useState} from 'react';
import { getWheatherDataByCity, getWheatherForLocation } from '../api/api';


const WeatherContext = createContext(null);

export const useWeather = () =>{
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState('');

  const fetchData = async () => {
    const response = await getWheatherDataByCity(searchCity);
    setData(response);
  };

  const fetchCurrentUserLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      getWheatherForLocation(position.coords.latitude, position.coords.longitude).then((data)=>setData(data));
    })
  };

  const clearData = () => {
    setData(null);
    setSearchCity('');
    fetchCurrentUserLocation();
  }

  return(
    <WeatherContext.Provider value = {{searchCity, data, setSearchCity, fetchData, fetchCurrentUserLocation, clearData}}>
      {props.children}
     </WeatherContext.Provider> 
  );

};