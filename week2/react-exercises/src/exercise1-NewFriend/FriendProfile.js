import React from 'react';

const FriendProfile = ({friend}) => {
  const {name, location, email, phone} = friend
  return (
    <ul>
      <li>Name: {name.first} {name.last}</li>
      <li>Address: {location.street.number}, {location.street.name}, {location.city}; {location.state}</li>
      <li>Country: {location.country}</li>
      <li>Email: {email}</li>
      <li>Phone Number: {phone}</li>
    </ul>
  )
}

export default FriendProfile;
