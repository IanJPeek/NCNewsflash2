import React, { Component } from "react";
import axios from "axios";

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
              value={commentInput}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <button>Have My Say!</button>
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
    const { article_id } = this.props;
    event.preventDefault();
    const { usernameInput, commentInput } = this.state;
    axios
      .post(
        `https://nc-news-ianp.herokuapp.com/api/articles/${article_id}/comments`,
        { username: usernameInput, body: commentInput }
      )
      .then(({ data }) => {
        console.log(data, "addedComment");
        this.setState({ usernameInput: "jessjelly", commentInput: "" });
        this.props.displayAdded(data)
      });
  };



}

export default AddComment;
