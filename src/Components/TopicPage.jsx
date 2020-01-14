import React, { Component } from 'react';
import axios from 'axios'
import ArticleList from './ArticleList';

class TopicPage extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) { this.getArticles() }
  }

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>LOADING... Getting the latest News!</p>

    return (
      <div>
        <h3>All articles on {this.props.topic}</h3>
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
        this.setState({ articles: data.articles, isLoading: false });
      })
      .catch(err => console.dir(err));
  };
}

export default TopicPage;