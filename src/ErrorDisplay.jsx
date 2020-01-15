import React from 'react';

const ErrorDisplay = (err) => {
  // console.dir(err)

  // const {status} = err.response
  // const {msg} = err.response.data

  // console.log(err, "log")
  // console.log(err.response.status, "status?")
  // console.log(err.response.data.msg, "msg?")
  return (
    <div>
      {/* <p>{status}: {msg}</p> */}
      <p>Uh-oh - try something else!</p>
    </div>
  );
};

export default ErrorDisplay;