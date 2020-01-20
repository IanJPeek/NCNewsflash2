import React from 'react';
import ArticleCard from './ArticleCard';

function ArticlesList(props) {

  const {articles} = props
  const arrayID = articles.map(article => article.article_id)

  return (
      <ul >{articles.map(article => {
        return (
        <ArticleCard className="ArticleCard" 
        article={article} 
        key={article.article_id}
        lookUpId={arrayID.indexOf(article.article_id)}
        />)
      }
        )}
      </ul>
  );
}

export default ArticlesList;