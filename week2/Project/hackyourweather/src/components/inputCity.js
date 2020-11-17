import React from 'react';

const InputCity = ({cityName, setCityName}) => {
  return <form className="form"> <input
  type="text"
  name="cityName"
  placeholder="Search City"
  value={cityName}
  onChange={event => {
    event.preventDefault();
  // console.log(event.target.value)
  setCityName(event.target.value);
  }}
  />
  </form>
};
export default InputCity;