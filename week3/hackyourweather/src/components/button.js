import React from 'react';

const SearchDataButton = ({fetchData}) => {
  return <button 
  onClick={fetchData}
  >Search</button>
};
export default SearchDataButton;