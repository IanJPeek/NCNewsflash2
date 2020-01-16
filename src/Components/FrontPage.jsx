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
    const {topic} =this.props

    if (err) return <p> <ErrorDisplay {...err}/>
    {err.response.status}-
    {err.response.data.msg}</p>

    if (isLoading) return <p>LOADING... Getting the latest News!</p>;

    return (
      <div>
        <h3>Our Top Stories {topic ? "- all " + topic[0].toUpperCase() + topic.slice(1) + " articles": null}</h3>
        {/* <p>{topic}</p> */}
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
        this.setState({ articles: data.articles, isLoading: false, err: null });
      })
      .catch(err => {
        console.dir(err);
        this.setState({ err: err, isLoading: false });
      });
  };
}

export default FrontPage;
