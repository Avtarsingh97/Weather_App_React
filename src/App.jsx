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

  // console.log(weather.data.error);

  return (
    <>
      
      <div className="app font-body">
        <h1 className='text-5xl font-bold p-6 text-white'>Weather Forecast App</h1>
        <Input className="border-1 rounded-xl px-2 py-2 w-96 text-lg m-2 text-white max-[520px]:w-50"/>
        <Button className="text-lg border-1 rounded-xl px-5 py-2 bg-blue-500 text-white hover:bg-blue-700 my-5 cursor-pointer" onClick={weather.fetchData} value="Search" disabled={!weather.searchCity.trim()} />
        {(weather.data == null) ? (
        <div className='font-body text-4xl text-white'>
          <p>Data Loading Please Wait....</p>
        </div>):((weather.data.error) ? (
          <div className='font-body text-4xl text-white'>
            <p>City Not Found</p>
            </div>):(<Card/>))};
        <Button className="text-lg border-1 rounded-xl px-5 py-2 bg-blue-500 text-white hover:bg-blue-700 my-5 cursor-pointer" onClick={weather.clearData} value="Clear" />
      </div>
      
    </>
  );
};

export default App;
