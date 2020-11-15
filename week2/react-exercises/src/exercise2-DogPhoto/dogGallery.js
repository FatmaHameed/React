import React, { useState } from 'react';
import Button from './button'
import DogPhoto from './dogPhoto'

const DogGallery = () => {
const [dogPhotos, setDogPhotos ] = useState([]);
const [isLoading, setLoading] = useState(false);
const [hasError, setError] = useState(false);

const getDogPhoto = async() => {
  try {
    await setLoading(true);
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    console.log(data.message);
    await setDogPhotos([...dogPhotos, data.message]);
    console.log(dogPhotos);
    await setLoading(false);

  }
   catch (err){
      setError(true);
      setLoading(true)
  };
};

const getFirstImage = dogPhotos.length < 1 ? "Get your first dog by clicking the button" : "";

return (
  <div>
    <p>{getFirstImage}</p>
    <Button fetchedDog ={getDogPhoto}/>
    {isLoading && <p>Loading...</p> }
    { !hasError && <div> 
    {dogPhotos.map(dog => <DogPhoto photo = {dog}/>)}
    </div>}
    { hasError && <p>Something went wrong</p> }
</div>
)

};

export default DogGallery;