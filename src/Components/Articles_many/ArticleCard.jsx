import React from "react";
import { Link } from "@reach/router";
import VoteChanger from "../VoteChanger";
import { textTrimmer } from "../utils";
import { dateConverter } from "../utils";

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

  const GetIdClass = () => {

    let id="grey"
    let newId = true;

    if (lookUpId % 2 === 0 ) { newId= false}
    newId === true ? id="grey" : id="red";

    return id
  }

  return (
    <li 
    id={"red" ? GetIdClass() : "grey"}
    >
      <Link className="hypertext" to={`/articles/${article_id}`}>
        <h3>{title} <span className="notBold">by <em>{author}</em></span></h3>
        <article>{textTrimmer(body)}</article>
        <br></br>
        <label>
          <b>Comment count: </b>
          {comment_count} &emsp;
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
