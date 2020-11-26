import React, { useState } from 'react';
import WeatherBox from './WeatherBox';
import Spinner from './Spinner';
import ErrorMessage from './ErrorText';
import InputCity from './InputCity';
import SearchDataButton from './Button';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const Main = () => {
  const [city, setCity] = useState({});
  const [cityName, setCityName] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units=metric`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod < 400) {
        setCity(data);
        setLoading(false);
      } else {
        setCity({});
        throw Error(data.cod);
      }
      await setCityName('');
    } catch (error) {
      setError(error.message);
      setLoading(true);
      setLoading(false);
    }
  };
  const error = (Object.keys(isError).length = 0);
  const displayWeatherInfo =
    error || Object.keys(city).length > 0 ? (
      <WeatherBox city={city} />
    ) : (
      <ErrorMessage isError={isError} />
    );
  return (
    <div>
      <span className="flex">
        <InputCity cityName={cityName} setCityName={setCityName} />
        <SearchDataButton fetchData={fetchData} />
      </span>
      {isLoading && <Spinner />}
      <div>{displayWeatherInfo}</div>
    </div>
  );
};

export default Main;
