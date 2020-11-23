import React from 'react';
import shortid from 'shortid';

const cityWeatherData = require('../city-weather.json');

const WeatherBox = () => {

 const weatherList = cityWeatherData.map((city) => {
   const{name, 
        sys: {country}, 
        weather: [{main}], 
        weather: [{description}], 
        main: {temp_min}, 
        main: {temp_max}, 
        coord: {lat}, 
        coord: {lon}} = city;

    return (
              <div className="box" key={shortid.generate()}>
                <h2>{name}, {country}</h2>

                <div>
                  <h4>{main}</h4>
                  <h5>{description}</h5>
                </div>

                <div>
                  <span>min temp: </span><span>{temp_min}</span> 
                </div>

                <div>
                  <span>max temp: </span><span>{temp_max}</span>
                </div>

                <div>
                  <span>Location: </span><span>{lat}, {lon}</span>
              </div>
              </div>
            )
  });

  return (
          <div className="boxContainer">{weatherList}</div>
  )

};

export default WeatherBox;