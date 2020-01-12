import React from 'react';
import ArticleCard from './ArticleCard';

function ArticleList(props) {

  const {articles} = props
  // console.log(props, "from ArticleList")

  return (
    <div>
      <ul>{articles.map(article => {
        return (
        <ArticleCard className="ArticleCard" article={article} key={article.article_id}/>)
      }
        )}
      </ul>
    </div>
  );
}

export default ArticleList;