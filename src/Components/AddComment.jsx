import React, { Component } from "react";
import { handlePost } from "./api";

class AddComment extends Component {
  state = {
    usernameInput: "jessjelly",
    commentInput: ""
  };

  render() {
    const { usernameInput, commentInput } = this.state;

    return (
      <div className="AddComment">
        <form onSubmit={this.handleSubmit}>
          <label>
            <b>Username: </b>
            <input
              type="text"
              placeholder="jessjelly"
              name="usernameInput"
              value={usernameInput}
              onChange={this.handleChange}
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
          <button disabled={commentInput.length === 0}>Have My Say!</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    // console.log(this.state, "in handleChange");
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id } = this.props;
    const { usernameInput, commentInput } = this.state;

    handlePost(article_id, usernameInput, commentInput).then(({ data }) => {
      // console.log(data, "addedComment");
      this.setState({ usernameInput: "jessjelly", commentInput: "" });
      this.props.displayAdded(data);
    });
  };
}

export default AddComment;
