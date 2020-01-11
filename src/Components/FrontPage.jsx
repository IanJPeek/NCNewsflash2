import React, { Component } from 'react';
import axios from 'axios'
import ArticleList from './ArticleList';

class FrontPage extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.getArticles();
  }

  // componentDidUpdate(prevProps, prevState) {
  // if (prevState.articles[1].title !== this.state.articles[1].title)
  //   this.getArticles();
  // }

  render() {
    const { articles } = this.state;

    return (
      <div>
        <h3>Our Top Stories</h3>

        <ArticleList articles={articles} />
      </div>
    );
  }

  getArticles = () => {
    const { topic } = this.props;
    return axios
      .get(`https://nc-news-ianp.herokuapp.com/api/articles`, {
        params: {
          topic: topic
        }
      })
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      })
      .catch(err => console.dir(err));
  };
}

export default FrontPage;