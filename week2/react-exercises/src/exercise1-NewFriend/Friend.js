import React, { useState, useEffect} from 'react';
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
    console.log(data.results[0]);
    const dataObj = data.results[0];
    await setFriend(dataObj);
    console.log("friends", friend);
    await setLoading(false)

  }
   catch (err){
      setError(true);
      setLoading(true)
  };
};

return (
  <div>
    <h1>{console.log("return", friend)}</h1>
    <Button fetchedData ={getFriend}/>
    {isLoading && <p>Loading...</p> }
    { !hasError && <div> 
    { Object.keys(friend).length > 0 && <FriendProfile friend = {friend}/>}
    
    </div>}
    { hasError && <p>Something went wrong</p> }
</div>
)

};

export default Friend;