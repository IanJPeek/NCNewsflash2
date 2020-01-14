// import React, { Component } from 'react';

// class VoteChange extends Component {

// state = {
//   votes: 0
// }

//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }

// export default VoteChange;


import React from 'react';
import axios from "axios";

function VoteChange(changeValue) {
//CommentChange
  axios.patch(`https://nc-news-ianp.herokuapp.com/api/comments/${comment_id}`,{inc_votes: changeValue}
  )
  .then(({data}) =>
  console.log(data, "patched")
  )

  return (
    <div>
      



 {/* axios
      .post(
        `https://nc-news-ianp.herokuapp.com/api/articles/${article_id}/comments`,
        {username: usernameInput, body: commentInput }
    )
      .then(({data}) => {
        console.log(data, "addedComment"); */}



    </div>
  );
}

export default VoteChange;