import React from 'react'

const ErrorMessage = ({isError}) => {
  if (isError == 404) {
    return <div className="error"><p>Please Input a Valid City Name</p></div>
  } else if (isError == 401) {
    return <div className="error"><p>Oops! Something Went Wrong</p></div>
  } else {
  return <div>{null}</div>
  }
}
export default ErrorMessage;