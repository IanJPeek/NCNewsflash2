import React, { Component } from 'react';

class LoggedIn extends Component {

  state = {
    loggedInUser: "jessjelly"
  }
  render() {
    const {loggedInUser} =this.state
    return (
      <div className="LoggedIn">
        <p>Logged in as: <b id="LoggedUser">{loggedInUser}</b></p>
      </div>
    );
  }
}

export default LoggedIn;