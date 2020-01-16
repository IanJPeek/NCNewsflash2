import React from "react";
import CommentCard from "./CommentCard";

function CommentList(props) {
  const { comments, displayDeleted } = props;

  return (
    <ul>
      {comments.map(comment => {
        return (
          <CommentCard
            className="CommentCard"
            comment={comment}
            key={comment.comment_id}
            displayDeleted={displayDeleted}
          />
        );
      })}
    </ul>
  );
}

export default CommentList;
