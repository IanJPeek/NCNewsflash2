import React from 'react';
import {Link} from "@reach/router"

function ArticleCard(props) {

  const { article } = props;
  const {title, body, author, article_id, comment_count, votes, created_at} = article;

  return (
    <div>
      <li>
        <Link className="hypertext" to={`/articles/${article_id}`}>
          <h3>{title}</h3>
          <label><b>Author: </b>{author}</label>
          <article>{body}</article>
          <br></br>
          <label><b>Comment count: </b>{comment_count} &emsp;</label>
          {/* <label><b>Votes: </b>{votes} &emsp;</label> */}
          <label><b>Created: </b>{created_at}</label>
        </Link>
      </li>
    </div>
  );
}

export default ArticleCard;