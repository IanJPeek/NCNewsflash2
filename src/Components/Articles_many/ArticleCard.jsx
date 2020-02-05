import React from "react";
import { Link } from "@reach/router";
import VoteChanger from "../VoteChanger";
import { textTrimmer } from "../utils";
import { dateConverter } from "../utils";
import { GetIdClass } from "../utils";

function ArticleCard(props) {
  
  const { article, lookUpId } = props;
  const {
    title,
    body,
    author,
    article_id,
    comment_count,
    votes,
    created_at
  } = article;

  return (
    <li 
      id={"red" ? GetIdClass(lookUpId) : "grey"}
    >
      <Link className="hypertext" to={`/articles/${article_id}`}>
        <h3>{title} <span className="notBold">by <em>{author}</em></span></h3>
        <article>{textTrimmer(body)}</article>
        <br></br>
        <label>
          <b>Comment count: </b>
          {comment_count}
        </label>
        <label>
          <b>Created: </b>
          {dateConverter(created_at)}
        </label>
      </Link>
      <VoteChanger votes={votes} article_id={article_id} />
    </li>
  );
}

export default ArticleCard;
