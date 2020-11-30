import React from 'react';

const WeatherBox = ({ city, removeCityWeather, id }) => {
  const {
    name,
    sys: { country },
    weather: [{ main }],
    weather: [{ description }],
    weather: [{ icon }],
    main: { temp_min },
    main: { temp_max },
    coord: { lat },
    coord: { lon },
  } = city;
  const iconURL = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <div className="box">
      <div className="imageContainer">
        <img src={iconURL} alt={description}></img>
      </div>
      <div>
        <h2>
          {name}, {country}
        </h2>
        <div>
          <h4>{main}</h4>
          <h5>{description}</h5>
        </div>
        <div>
          <span>min temp: </span>
          <span>{temp_min}</span>{' '}
        </div>
        <div>
          <span>max temp: </span>
          <span>{temp_max}</span>
        </div>
        <div>
          <span>Location: </span>
          <span>
            {lat}, {lon}
          </span>
        </div>
      </div>
      <div className="delete">
        <button
          onClick={(e) => {
            return removeCityWeather(id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
export default WeatherBox;
