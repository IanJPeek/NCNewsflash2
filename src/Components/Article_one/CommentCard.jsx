import React from "react";
import VoteChanger from "../VoteChanger";
import { handleDelete } from "../api";
import { dateConverter } from "../utils";
import { GetIdClass } from "../utils";

function CommentCard(props) {
  const { comment, displayDeleted, lookUpId } = props;
  const { body, votes, comment_id, author,created_at } = comment;

  const eraseComment = () => {
    if (author === "jessjelly"){
    handleDelete(comment_id)
    .then(() =>{displayDeleted(comment_id)})
    .catch(err => {
    })}
    else{alert("You can only delete your OWN comments!")}
  };

  return (
      <li
      id={"red" ? GetIdClass(lookUpId) : "grey"}
      >
        <label>
          <b>Comment: </b>
          {body}
        </label>
        <br></br>
        <br></br>
        <label>
          <b>User: </b>
          {author} &emsp;
        </label>
      <label>
        <b>Created: </b>
        {dateConverter(created_at)}
      </label>
        <br></br>
        <VoteChanger votes={votes} comment_id={comment_id} />
        <button
          onClick={() => {
            eraseComment();  
          }
        }
        disabled={(author ==="jessjelly") ? false:true}
          className="eraseCommentButton"
        >
          Delete Comment
        </button>
      </li>
  );
}

export default CommentCard;
