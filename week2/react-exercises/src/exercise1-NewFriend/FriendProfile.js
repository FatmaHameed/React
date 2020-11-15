import React from 'react';

const FriendProfile = ({firstName, lastName, streetNo, streetName, city, state, country, emailAddress, phoneNum}) => {
  return (
    <ul>
      <li>Name: {firstName} {lastName}</li>
      <li>Address: {streetNo}, {streetName}, {city}; {state}</li>
      <li>Country: {country}</li>
      <li>Email: {emailAddress}</li>
      <li>Phone No.: {phoneNum}</li>
    </ul>
  )
}

export default FriendProfile;