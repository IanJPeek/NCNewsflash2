import React from "react";

function LoggedIn(props) {
  const { loggedInUser } = props;
  return (
    <div className="LoggedIn">
      <p>
        Logged in as: <b id="LoggedInUser">{loggedInUser}</b>
      </p>
    </div>
  );
}

export default LoggedIn;
