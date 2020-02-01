import React from "react";
import CommentCard from "./CommentCard";

function CommentList(props) {
  const { comments, displayDeleted } = props;

  if (comments === undefined) {
    return null;
  }
  const arrayID = comments.map(comment => comment.comment_id);

  return (
    <ul>
      {comments.map(comment => {
        return (
          <CommentCard
            comment={comment}
            key={comment.comment_id}
            displayDeleted={displayDeleted}
            lookUpId={arrayID.indexOf(comment.comment_id)}
          />
        );
      })}
    </ul>
  );
}

export default CommentList;
