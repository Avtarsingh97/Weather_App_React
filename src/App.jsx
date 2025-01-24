import { useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import {useWeather} from './Context/Weather'
 
function App() {
  const weather = useWeather();

  useEffect(()=>{
    weather.fetchCurrentUserLocation();
  },[]);

  return (
    <div className="app">
      <h1>Weather Forecast App</h1>
      <Input/>
      <Button onClick={weather.fetchData} value="Search"/>
      <Card/>
      
    </div>
  );
};

export default App;
