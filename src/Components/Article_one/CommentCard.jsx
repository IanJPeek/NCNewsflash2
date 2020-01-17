import React from "react";
import VoteChanger from "../VoteChanger";
import { handleDelete } from "../api";

function CommentCard(props) {
  const { comment, displayDeleted } = props;
  const { body, votes, comment_id, author } = comment;

  const eraseComment = () => {
    console.log(author)
    if (author === "jessjelly"){
    handleDelete(comment_id).then(displayDeleted(comment_id)).catch(err => {
      console.dir(err);
    })}
    else{alert("You can only delete your OWN comments!")}
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
