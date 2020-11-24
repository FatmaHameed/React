import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const WeatherBox = ({city, id, setCity}) => {
  function removeCityWeather (e) { 
    const newCityArray = [...city];
    setCity(newCityArray.filter((newCity, key) => 
     {return key !== id}))
}

const displayEachCity = city.map((city) =>
 {
  const{name, sys: {country}, weather: [{main}], weather: [{description}],weather: [{icon}], main: {temp_min}, main: {temp_max}, coord: {lat}, coord: {lon}} = city;
  const iconURL = `http://openweathermap.org/img/w/${icon}.png`;
  
  return (
    <div className="box" key={uuidv4()}> 
    <div className = "imageContainer">
    <img src={iconURL} alt={description}></img></div>
    <div>
    <h2>{name}, {country}</h2>
    <div>
    <h4>{main}</h4>
    <h5>{description}</h5>
    </div>
    <div>
    <span>min temp: </span><span>{temp_min}</span> </div>
    <div>
    <span>max temp: </span><span>{temp_max}</span>
    </div>
    <div>
    <span>Location: </span><span>{lat}, {lon}</span>
    </div></div>
    <div className="delete"><button onClick={removeCityWeather}>X</button></div>
    </div>
    )} )
    return displayEachCity
};
export default WeatherBox;