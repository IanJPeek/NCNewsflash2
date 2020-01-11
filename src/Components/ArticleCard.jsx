import React from 'react';
import {Link} from "@reach/router"

function ArticleCard(props) {

  const { article } = props;
  const {title, body, author, article_id} = article;

  return (
    <div>
      <li>
        <Link className="hypertext" to={`articles/${article_id}`}>
          <h3>{title}</h3>
          <label><b>Author: </b>{author}</label>
          <article>{body}</article>
        </Link>
      </li>
    </div>
  );
}

export default ArticleCard;