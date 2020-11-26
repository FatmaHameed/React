import React from 'react';

const InputCity = ({ cityName, setCityName }) => {
  return (
    <form className="form">
      {' '}
      <input
        type="text"
        name="cityName"
        placeholder="Search City"
        value={cityName}
        onChange={(event) => {
          event.preventDefault();
          setCityName(event.target.value);
        }}
      />
    </form>
  );
};
export default InputCity;
