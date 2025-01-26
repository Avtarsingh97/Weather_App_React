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
    <>
      
      <div className="app font-body">
        <h1 className='text-5xl font-bold p-6 text-white'>Weather Forecast App</h1>
        <Input className="border-1 rounded-xl px-2 py-2 w-96 text-lg m-2 text-white max-[520px]:w-50"/>
        <Button onClick={weather.fetchData} value="Search" disabled={!weather.searchCity.trim()} />
        {(weather.data != null) ? (<Card/>):(
        <div className='font-body text-4xl text-white'>
          <p>Data Loading Please Wait....</p>
        </div>)};
      </div>
      
    </>
  );
};

export default App;
