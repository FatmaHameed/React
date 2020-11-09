import React from 'react';

function Guarantee(props){
const { image, title, description } = props

return (
  <div>
    <img src={image} alt={`Image of ${title}`} />
    <h1>{title}</h1>
    <p>{description}</p>
  </div>)
};

export default Guarantee;