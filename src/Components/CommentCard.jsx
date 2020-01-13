import React from "react";
import axios from "axios";

function CommentCard(props) {
  const { comment } = props;
  const { body, votes, comment_id, author } = comment;

  const eraseComment = () => {
    console.log(comment_id, "erase commentCard Id");
    axios.delete(
      `https://nc-news-ianp.herokuapp.com/api/comments/${comment_id}`
    );
  };

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
        <label>
          <b>Votes: </b>
          {votes}
        </label>
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
