import React from 'react';


function HobbyList() {
const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
return <Hobbies hobbies = {hobbies}/> 
};
 
function Hobbies(props) {
const hobbies = props.hobbies;
const listHobbies = hobbies.map((hobby) => <li>{hobby}</li>)

return (
  <ul>
    {listHobbies}
  </ul>
)
}
export default HobbyList;
