import React, {useState}  from 'react';
import WeatherBox from './weatherBox';
import Spinner from './Spinner';
import ErrorMessage from './errorText'
import InputCity from './inputCity';
import SearchDataButton from './button'


const Main= () => {
  const [city, setCity] = useState({});
  const [cityName, setCityName] = useState('');
   const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState({});
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
  // console.log(API_KEY);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units=metric`
  const fetchData = async() => {
    try {
      setLoading(true)
      const response = await fetch(url);
      const data = await response.json();
        if (data.cod < 400) {
        setCity(data);
        console.log(data)
        setLoading(false);
      } else {
        setCity({});
        throw Error(data.cod);
      }
     await setCityName('');
    } catch (error) {
    console.log(error);
    // console.log(err);
    setError(error.message);
    setLoading(true);
    setLoading(false);
    }
  }
const error = Object.keys(isError).length = 0;
const displayWeatherInfo = error || Object.keys(city).length > 0 ? <WeatherBox city = {city}/> : <ErrorMessage isError = {isError}/>
  return (
    <div>
      <span className="flex">
      <InputCity
      cityName={cityName}
      setCityName={setCityName}
      />
      <SearchDataButton fetchData = {fetchData}/></span>
    {/* <button onClick={FetchData}>Fetch City </button> */}
    {isLoading && <Spinner/>}
    <div>{displayWeatherInfo}</div>
    {/* {Object.keys(city).length > 0 && <WeatherBox city = {city}/>}
    {error && <ErrorMessage />} */}
<h1>{console.log("Here is the error", isError)}</h1>
    </div>)
}
export default Main; 



 