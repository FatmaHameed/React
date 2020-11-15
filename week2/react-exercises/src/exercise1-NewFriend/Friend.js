import React, { useState } from 'react';
import Button from './Button'
import FriendProfile from './FriendProfile'

const Friend = () => {
const [friend, setFriend ] = useState({});
const [isLoading, setLoading] = useState(false);
const [hasError, setError] = useState(false);

const getFriend = async() => {

  try {
    await setLoading(true);
    const response = await fetch('https://www.randomuser.me/api?results=1');
    const data = await response.json();
    console.log(data.results[0])
    await setFriend(data.results[0])
    await setLoading(false)

  }
   catch (err){
      setError(true);
      setLoading(true)
  };
}

return (
  <div>
    <h1>{console.log(friend.name.first)}</h1>
    <Button fetchedData ={getFriend}/>
    {isLoading && <p>Loading...</p> }
    { !hasError && <div> 
    <FriendProfile firstName = {friend.name.first} lastName = {friend.name.last} streetNo = {friend.location.street.number} streetName = {friend.location.street.name} city={friend.location.city} state = {friend.location.state} country = {friend.location.country} emailAddress = {friend.email} phoneNum = {friend.phone}/>
    </div>}
    { hasError && <p>Something went wrong</p> }
</div>
)

};

export default Friend;