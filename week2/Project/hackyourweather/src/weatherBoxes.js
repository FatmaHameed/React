import React from 'react';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY

console.log(API_KEY)

const data = require('../city-weather.json');

const WeatherBox = () => {

 const weatherList = data.map((city) => {
   const{name, sys: {country}, weather: [{main}], weather: [{description}], main: {temp_min}, main: {temp_max}, coord: {lat}, coord: {lon}} = city;

    return (
    <div className="box">
      <h2>{name}, {country}</h2>
      <div>
      <h4>{main}</h4>
      <h5>{description}</h5>
      </div>
      <div>
    <label>min temp: </label><span>{temp_min}</span> </div>
    <div>
    <label>max temp: </label><span>{temp_max}</span>
    </div>
    <div>
    <label>Location: </label><span>{lat}, {lon}</span>
    </div>
    </div>
    )
  });

  return (


  <div className="boxContainer">{weatherList}</div>

  )

};

export default WeatherBox; 
 