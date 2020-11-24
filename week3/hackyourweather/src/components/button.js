import React from 'react';

const SearchDataButton = ({fetchData, cityName, disabled, styleButton}) => {
  return <button 
  onClick={fetchData}
  disabled={disabled}
  style={ styleButton}
>Search</button>
};
export default SearchDataButton;