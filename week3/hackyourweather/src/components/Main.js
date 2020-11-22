import React, {useState}  from 'react';
import WeatherBox from './weatherBox';
import Spinner from './Spinner';
import ErrorMessage from './errorText'
import InputCity from './inputCity';
import SearchDataButton from './button'


const Main= () => {
  const [city, setCity] = useState([]);
  const [cityName, setCityName] = useState('');
   const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState({});
  let [key, setKey] = useState(0)
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units=metric`
  const fetchData = async() => {
    try {
      setLoading(true)
      const response = await fetch(url);
      const data = await response.json();
        if (data.cod < 400) {
        setCity([...city, data]);
        setKey(key++)
        setLoading(false);
        setError({})
      } else {
        throw Error(data.cod);
      }
     await setCityName('');
    } catch (error) {
    console.log(error);
    setError(error.message);
    setLoading(true);
    setLoading(false);
    } 
  }
const error = Object.keys(isError).length = 0;
  return (
    <div>
      <span className="flex">
      <InputCity
      cityName={cityName}
      setCityName={setCityName}
      />
      <SearchDataButton fetchData = {fetchData} cityName={cityName}/></span>
    {isLoading && <Spinner/>}
    {city.length > 0 &&  
    <WeatherBox 
                city = {city}
                id= {key}
                setCity={setCity}
    />}
    {!error && <ErrorMessage isError = {isError}/>}
    <h1>{console.log("Here is the error", isError)}</h1>
    <h1>{console.log("Here is the city array", city)}</h1>
    </div>)
}
export default Main; 



 