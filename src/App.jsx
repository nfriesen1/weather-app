import './App.css';
import { useState } from 'react';
import Search from './components/Search/Search';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import { OPEN_WEATHER_API_KEY, WEATHER_API_URL } from './api';
import Forecast from './components/Forecast/Forecast';
import { Typography, Divider } from '@mui/material';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`)

    Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
      const weatherResponse =  await response[0].json();
      const forecastResponse =  await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForecast({ city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));
  }

  console.log(currentWeather)
  console.log(forecast)

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather ? <CurrentWeather currentWeather={currentWeather}/> : (null)}
      <Typography variant='h5' align='center'marginTop="20px" marginBottom="20px">1-week Forecast</Typography>
      {forecast ? <Forecast forecast={forecast}/> : (null)}
    </div>
  );
}

export default App;
