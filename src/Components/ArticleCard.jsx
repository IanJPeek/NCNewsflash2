import React from 'react';
import {Link} from "@reach/router"
import VoteChanger from './VoteChanger';

function ArticleCard(props) {

  const { article } = props;
  const {title, body, author, article_id, comment_count, votes, created_at} = article;

  function dateConverter() {
    // console.log({created_at})
    // const date = {created_at}
    // const newDate = created_at.toDateString()
    // console.log(date)
    // const newDate = date.toDateString
    // console.log(Date.parse(date))
    const newDate = Date.parse(created_at)
    console.log(newDate)
    // console.log(new Date (newDate))
    const displayDate = new Date(newDate)
    const dateString = "" + displayDate
    console.log (displayDate)
    console.log(dateString)
    // return displayDate
return dateString
  }

  return (
    <div>
      <li>
        <Link className="hypertext" to={`/articles/${article_id}`}>
          <h3>{title}</h3>
          <label><b>Author: </b>{author}</label>
          <article>{body}</article>
          <br></br>
          <label><b>Comment count: </b>{comment_count} &emsp;</label>
          <label><b>Created: </b>{created_at}
          {/* {dateConverter()} */}
          </label>
        </Link>
          <VoteChanger votes={votes} article_id={article_id}/>
      </li>
    </div>
  );
}

export default ArticleCard;