import React, { Component } from 'react';
import axios from 'axios'
import ArticleList from './ArticleList';

class FrontPage extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.getArticles();
  }

  
  
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>LOADING... Getting the latest News!</p>
    
    return (
      <div>
        <h3>Our Top Stories</h3>
        <ArticleList articles={articles} />
      </div>
    );
  }
  
  //   componentDidUpdate(prevProps, prevState) {
    
    //      const { articles, isLoading } = this.state;
    
    // if (prevState && (prevState.articles[1].title !== this.state.articles[1].title))
    
    // console.log(articles[0].title)
    // console.log(prevState, "previous")
    
    //   if (( !isLoading ) 
    
    //   && (articles[2].title !== prevState.articles[2].title ) ) {this.getArticles}
    
    //   console.log(articles[2].title)
    
    //     &&
    //     (articles[2].title !== prevState.articles[2].title
    //   )) this.getArticles();
    
    //   }
    
    // Update (fail 2)
    // componentDidUpdate(prevProps, prevState){
    //   const { articles, isLoading, article_id } = this.state;
  
    //   if (!isLoading) console.log(articles[1].title)
    //     .articles[4].article_id);
      
    //   && (articles[4].article_id !== prevState.articles[4].article_id)) {this.getArticles()}
      
    //   console.log(articles[4].article_id)
    //   if !(articles[4].article_id)
    // }
    
    getArticles = () => {
      const { topic } = this.props;
      return axios
      .get(`https://nc-news-ianp.herokuapp.com/api/articles`, {
        params: {
          topic: topic
        }
      })
      .then(({ data }) => {
        this.setState({ articles: data.articles, isLoading: false });
      })
      .catch(err => console.dir(err));
  };
}

export default FrontPage;