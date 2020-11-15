import React from 'react';

const Joke = ({setup, punchline}) => {
return (
  <div>
    <p>Setup: {setup}</p>
    <p>Punchline: {punchline}</p>
  </div>
)
};

export default Joke;