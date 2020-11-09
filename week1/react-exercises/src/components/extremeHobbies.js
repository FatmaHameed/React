import React from 'react';

function Hobbies(props) {
  const hobbies = props.hobbies;
  const listHobbies = hobbies.map((hobby) => <li>{hobby}</li>)
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
