import React from 'react';

function CommentCard(props) {

const {comment} = props;
const {body, votes} = comment

  return (
    <div className="commentCard">
      
      <p>{body}</p>
      <label><b>Votes: </b>{votes}</label>
    </div>
  );
}

export default CommentCard;