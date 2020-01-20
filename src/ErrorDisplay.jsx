import React from 'react';

const ErrorDisplay = (err) => {
  
  const {status} = err.response
  const {msg} = err.response.data

  return (
    <>
      <p>Uh-oh - try something else!</p>
      <p>{status}-{msg}</p>
    </>
  );
};

export default ErrorDisplay;