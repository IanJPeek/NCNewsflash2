import React, { Component } from "react";
import axios from "axios";

class ArticlePage extends Component {
  state = {
    article: {}
    // isLoading: true
  };

  componentDidMount() {
    this.getArticle();
  }

  render() {
    const { article } = this.state;

    return (
      <div>
        <h3>Article Page</h3>
        <h2>{article.title} </h2>
        <p>
          <b>Author:</b> {article.author}
        </p>
        <p>{article.body}</p>
      </div>
    );
  }

  getArticle = () => {
    axios
      .get(
        `https://nc-news-ianp.herokuapp.com/api/articles/${this.props.article_id}`
      )
      .then(({ data }) => {
        this.setState({ article: data.article });
      });
  };
}

export default ArticlePage;
