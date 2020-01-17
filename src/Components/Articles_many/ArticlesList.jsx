import React from 'react';
import ArticleCard from './ArticleCard';

function ArticlesList(props) {

  const {articles} = props
  console.log(props, "from ArticlesList")

  return (
      <ul>{articles.map(article => {
        return (
        <ArticleCard className="ArticleCard" 
        article={article} 
        key={article.article_id}/>)
      }
        )}
      </ul>
  );
}

export default ArticlesList;