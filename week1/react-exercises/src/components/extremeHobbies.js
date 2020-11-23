import React from 'react';
import shortid from 'shortid';

function Hobbies({ hobbies }) {
  const listHobbies = hobbies.map((hobby) => <li key={shortid.generate()}>{hobby}</li>)
  return (
    <ul>
      {listHobbies}
    </ul>
  )
  };

function HobbyList() {
const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
return <Hobbies hobbies = {hobbies}/> 
};
 

export default HobbyList;
