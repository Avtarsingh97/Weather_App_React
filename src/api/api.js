const baseURL = "https://api.weatherapi.com/v1/current.json?key=aef8405b17404510977174145252401";


export const getWheatherDataByCity = async (city) => {
  try{
    const repsonse = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await repsonse.json();
  }catch(e){
    return e;
  }
};

export const getWheatherForLocation = async (lat,lon) => {
  const repsonse = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await repsonse.json();
};

