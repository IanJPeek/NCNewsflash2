import React from 'react';
import errorSad from "./images/errorSad.jpg"

const ErrorDisplay = (err) => {
  
  const {status} = err.response
  const {msg} = err.response.data

  return (
    <>
      <p>Uh-oh - try something else!</p>
      <p>{status}-{msg}</p>
      <img className="errorSad" src={errorSad} alt="A weeping figure" />
    </>
  );
};

export default ErrorDisplay;