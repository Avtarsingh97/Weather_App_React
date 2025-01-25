import React from 'react';
import {useWeather} from '../Context/Weather';

const Card = () => {
  const weather = useWeather();
  console.log(weather);
  return (
    <div className='w-[90%] m-auto flex gap-3 max-[880px]:flex-col'>
      <div className=" flex flex-col justify-center items-center bg-white/20 rounded-xl w-[60%] p-6 text-4xl text-white gap-3 h-110 max-[880px]:m-auto max-[880px]:w-[90%]">
        <img src={weather?.data?.current?.condition?.icon} className='w-25'/>
        <h3 className='text-3xl max-[600px]:text-3xl'>{weather?.data?.current?.condition?.text}</h3>
        <h3 className='text-8xl max-[600px]:text-7xl'>{weather?.data?.current?.temp_c} &deg;C</h3>
        <h3 className='text-lg'>Feels like {weather?.data?.current?.feelslike_c} &deg;C</h3>
        <h5 className='text-5xl max-[600px]:text-3xl'>{weather?.data?.location?.name}</h5>
        
      </div>
      <div className='flex flex-col w-[40%] gap-3 justify-between max-[880px]:flex-row max-[880px]:flex-wrap max-[880px]:w-[90%] max-[880px]:m-auto'>
        <div className=" flex flex-col justify-between p-3 items-center bg-white/20 rounded-xl w-[100%] text-4xl text-white h-33">
          <div>
            <h3 className='text-sm'>Wind Speed</h3>
          </div>
          <div className='flex justify-center items-center pb-1'>
          <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" height="65px" viewBox="0 -960 960 960" width="65px" fill="#e8eaed"><path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/></svg>
            <h3 className='text-6xl font-bold'>{weather?.data?.current?.wind_kph} <span className='text-sm'>KPH</span></h3>
          </div>          
        </div>



        <div className=" flex flex-col justify-between p-3 items-center bg-white/20 rounded-xl w-[100%] text-4xl text-white h-33">
          <div>
            <h3 className='text-sm'>Humidity</h3>
          </div>
          <div className='flex justify-center items-center pb-1'>
          <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" height="65px" viewBox="0 -960 960 960" width="65px" fill="#e8eaed"><path d="M580-240q25 0 42.5-17.5T640-300q0-25-17.5-42.5T580-360q-25 0-42.5 17.5T520-300q0 25 17.5 42.5T580-240Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-500q0-25-17.5-42.5T380-560q-25 0-42.5 17.5T320-500q0 25 17.5 42.5T380-440ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z"/></svg>
            <h3 className='text-6xl font-bold'>{weather?.data?.current?.humidity} <span className='text-sm'>%rh</span></h3>
          </div>          
        </div>



        <div className=" flex flex-col justify-between p-3 items-center bg-white/20 rounded-xl w-[100%] text-4xl text-white h-38">
          <div>
            <h3 className='text-sm'>Location</h3>
          </div>
          <div className='flex flex-col justify-center items-center pb-1'>
            <img src="" className='w-25'/>
            <h5 className='text-lg'>{weather?.data?.location?.name}, {weather?.data?.location?.region}</h5>
            <h3 className='text-2xl font-bold'>{weather?.data?.location?.country}</h3>
          </div>          
        </div>
        
      </div>
    </div>
  );
};

export default Card;