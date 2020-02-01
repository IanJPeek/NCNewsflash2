import React, { Component } from "react";
import { handlePost } from "../api";

class AddComment extends Component {
  state = {
    usernameInput: "jessjelly",
    commentInput: ""
  };
  
  render() {
    let { usernameInput, commentInput } = this.state;
    let {loggedInUser} = this.props
    usernameInput=loggedInUser

    return (
        <form className="AddComment" 
        onSubmit={this.handleSubmit}>
          <label>
            <b>Username (default): </b>
            <input
              type="text"
              placeholder="jessjelly"
              name="usernameInput"
              value={usernameInput}
              onChange={this.handleChange}
              className="userNameInput"
              disabled={true}
            />
          </label>
          <br></br>
          <label>
            <b>Comment: </b>
            <input
              type="text"
              name="commentInput"
              placeholder="What say you?"
              value={commentInput}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <button className="addCommentButton" disabled={commentInput.length === 0}>Have My Say!</button>
        </form>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id } = this.props;
    const { usernameInput, commentInput } = this.state;

    handlePost(article_id, usernameInput, commentInput).then(({ data }) => {
      this.setState({ usernameInput: "jessjelly", commentInput: "" });
      this.props.displayAdded(data);
    });
  };
}

export default AddComment;
