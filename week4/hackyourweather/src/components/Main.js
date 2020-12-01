import React, { useState } from 'react';
import WeatherBox from './WeatherBox';
import Spinner from './Spinner';
import ErrorMessage from './ErrorText';
import InputCity from './InputCity';
import SearchDataButton from './Button';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState({});
  let key = uuidv4();

  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units=metric`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod < 400) {
        setCities([...cities, data]);
        setLoading(false);
        setError({});
      } else {
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
  const disabled = cityName.trim() === '' ? true : false;
  const styleButton = {
    cursor: cityName.trim() === '' ? 'not-allowed' : 'pointer',
  };
  function removeCityWeather(id) {
    const newCityArray = [...cities];
    setCities(
      newCityArray.filter((newCity, index) => {
        return index !== id;
      }),
    );
  }
  return (
    <div>
      <span className="flex">
        <InputCity cityName={cityName} setCityName={setCityName} />
        <SearchDataButton
          fetchData={fetchData}
          disabled={disabled}
          styleButton={styleButton}
        />
      </span>
      {isLoading && <Spinner />}

      {cities.length > 0 && (
        <div key={key}>
          {cities.map((city, i) => {
            const temp_min = city.main.temp_min;
            console.log(temp_min);
            return (
              <WeatherBox
                key={+new Date() + Math.random()}
                city={city}
                id={i}
                cityName={city.name}
                removeCityWeather={removeCityWeather}
              />
            );
          })}
        </div>
      )}
      {!error && <ErrorMessage isError={isError} />}
    </div>
  );
};

export default Main;
