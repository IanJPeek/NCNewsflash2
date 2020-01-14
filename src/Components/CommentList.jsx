import React from "react";
import CommentCard from "./CommentCard";

function CommentList(props) {
  const { comments } = props;

  return (
    <div>
      <ul>
        {comments.map(comment => {
          return (
            <CommentCard
              className="CommentCard"
              comment={comment}
              key={comment.comment_id} 
              displayDeleted={props.displayDeleted}
            />
          );
        })}
        )
      </ul>
    </div>
  );
}

export default CommentList;
