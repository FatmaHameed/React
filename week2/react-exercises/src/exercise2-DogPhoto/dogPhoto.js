import React from 'react';

const DogPhoto = ({photo}) => {
  return <img src={photo} alt='Dog Image' style={{width:"200px", height: "200px", margin: "3px"}}></img>
};

export default DogPhoto;