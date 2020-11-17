import React from 'react'

const WeatherBox = ({city}) => {
  const{name, sys: {country}, weather: [{main}], weather: [{description}],weather: [{icon}], main: {temp_min}, main: {temp_max}, coord: {lat}, coord: {lon}} = city;
  const iconURL = `http://openweathermap.org/img/w/${icon}.png`;
    return (
    <div className="box">
    <div className = "imageContainer">
    <img src={iconURL} alt={description}></img></div>
    <div>
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
    </div></div>
    </div>
    )

};
export default WeatherBox;