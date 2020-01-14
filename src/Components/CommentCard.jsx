import React from "react";
import axios from "axios";

function CommentCard(props) {
  const { comment } = props;
  const { body, votes, comment_id, author } = comment;

  const eraseComment = () => {
    console.log(comment_id, "erase commentCard Id");
    axios
      .delete(`https://nc-news-ianp.herokuapp.com/api/comments/${comment_id}`)
      .then(props.displayDeleted(comment_id));
  };

  // const handleVote = (event) => {

  const voteChange = (changeValue) => {

  axios.patch(`https://nc-news-ianp.herokuapp.com/api/comments/${comment_id}`, { inc_votes: changeValue }
  )
  .then(({ data }) =>
    console.log(data, "patched")
  )

  //displayVote(data)

  }

  return (
    <div className="commentCard">
      <li>
        <label>
          <b>Comment: </b>
          {body}
        </label>
        <br></br>
        <label>
          <b>User: </b>
          {author} &emsp;
        </label>
        <br></br>
        <button
          className="upButton"
          onClick={() => voteChange(1)}
          // displayVote
        >
          Vote Up!
        </button>
        &emsp;
        <label>
          <b>Votes: </b>
          {votes}
        </label>
        &emsp;
        <button
          className="downButton"
          onClick={() => voteChange(-1)}
          // displayVote
        >
          Vote Down!
        </button>
        <br></br>
        <button
          onClick={() => {
            eraseComment();
          }}
          className="eraseCommentButton"
        >
          Delete Comment
        </button>
      </li>
    </div>
  );
}

export default CommentCard;
