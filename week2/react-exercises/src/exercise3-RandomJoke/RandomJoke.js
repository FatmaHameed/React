import React, {useState, useEffect} from 'react';
import Joke from './Joke'

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
 useEffect(async()=>{
    setLoading(true)
    const url = "https://official-joke-api.appspot.com/random_joke"
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setJoke(data);
      setLoading(false);

    } catch (err) {
      setError(true);
      setLoading(true);
    }
  }, [])
return (
  <div> 
    <h1>Jokes</h1>

    {!hasError && <Joke setup = {joke.setup} punchline = {joke.punchline}/>}

    {isLoading && <p>Loading...</p>}

    {hasError && <p>Oops! Something went wrong!</p>}
  </div>
  
)

};

export default RandomJoke;