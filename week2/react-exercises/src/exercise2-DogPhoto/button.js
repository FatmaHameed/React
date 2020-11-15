import React from 'react'


const Button = ({fetchedDog}) => {
return <button onClick = {fetchedDog}>Get a dog!</button>
};

export default Button;