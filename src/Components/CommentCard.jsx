import React from "react";
import VoteChanger from "./VoteChanger";
import { handleDelete } from "./api";

function CommentCard(props) {
  const { comment, displayDeleted } = props;
  const { body, votes, comment_id, author } = comment;

  const eraseComment = () => {
    handleDelete(comment_id).then(displayDeleted(comment_id)).catch(err => {
      console.dir(err);
    })
  };

  return (
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
        <VoteChanger votes={votes} comment_id={comment_id} />
        <button
          onClick={() => {
            eraseComment();
          }}
          className="eraseCommentButton"
        >
          Delete Comment
        </button>
      </li>
  );
}

export default CommentCard;
