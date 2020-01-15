import React, { Component } from "react";
import axios from "axios";
import ArticleList from "./ArticleList";
import ErrorDisplay from "../ErrorDisplay";

class FrontPage extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.getArticles();
    }
  }

  render() {
    const { articles, isLoading, err } = this.state;

    if (err) return <p> <ErrorDisplay {...err}/>
    
    {err.response.status}-
    {err.response.data.msg}</p>

    if (isLoading) return <p>LOADING... Getting the latest News!</p>;

    return (
      <div>
        <h3>Our Top Stories</h3>
        <ArticleList articles={articles} />
      </div>
    );
  }

  getArticles = () => {
    const { topic, sort, votes } = this.props;

    return axios
      .get(`https://nc-news-ianp.herokuapp.com/api/articles`, {
        params: {
          topic: topic,
          sort_by: sort,
          votes: votes
        }
      })
      .then(({ data }) => {
        this.setState({ articles: data.articles, isLoading: false });
      })
      .catch(err => {
        console.dir(err);
        this.setState({ err: err });
      });
  };
}

export default FrontPage;
