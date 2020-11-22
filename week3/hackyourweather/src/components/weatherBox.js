import React from 'react'

const WeatherBox = ({city, id, setCity}) => {
  function removeCityWeather (e) { 
    // console.log("here is dif", id, e.target.value)
    const newCityArray = [...city];
  setCity(newCityArray.filter((newCity, key) => 
  {
    // console.log(id, key, e.target.value)
    return key !== id}))
   
}
const mappedCity = city.map((city, key) =>
 {
  const{name, sys: {country}, weather: [{main}], weather: [{description}],weather: [{icon}], main: {temp_min}, main: {temp_max}, coord: {lat}, coord: {lon}} = city;
  const iconURL = `http://openweathermap.org/img/w/${icon}.png`;
  
  return (
    <div className="box" key={key}> 
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
    return mappedCity
 
};
export default WeatherBox;