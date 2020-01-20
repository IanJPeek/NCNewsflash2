import React, { Component } from "react";
import { patchVote } from "./api";

class VoteChanger extends Component {
  state = {
    votedOn: false,
    errMessage: false,
    voteDifference: 0
  };

  HandleVote = changeValue => {

    this.setState({ votedOn: true, voteDifference: this.state.voteDifference + changeValue });

    const { comment_id, article_id } = this.props;
    const request = comment_id
      ? "comments/" + comment_id
      : "articles/" + article_id;

    patchVote(request, changeValue)
      // .then(({ data }) => console.log(data, "patched"))
      .catch(err => {
        this.setState({ votedOn: false, voteDifference: 0, errMessage: true });
      });
  };

  render() {
    const { votes } = this.props;
    const { votedOn, errMessage, voteDifference } = this.state;

    if (errMessage) return <p>Your vote was not registered...</p>;

    return (
      <div className="VoteChanger">
        <button
          className="upButton"
          onClick={() => this.HandleVote(1)}
          disabled={voteDifference===1}
        >
          Vote Up!
        </button>
        &emsp;
        <label>
          <b>Votes: </b> {votedOn ? votes + voteDifference : votes}
        </label>
        &emsp;
        <button
          className="downButton"
          onClick={() => this.HandleVote(-1)}
          disabled={voteDifference === -1}
        >
          Vote Down!
        </button>
    </div>
    );
  }
}

export default VoteChanger;
