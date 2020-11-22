import React from 'react';

const SearchDataButton = ({fetchData, cityName}) => {
  return <button 
  onClick={fetchData}
  disabled={cityName.trim() === "" ? true : false}
  style={{ cursor: cityName.trim() === ""? "not-allowed": "pointer"}}
>Search</button>
};
export default SearchDataButton;