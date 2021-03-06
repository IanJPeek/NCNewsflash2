import React, { Component } from "react";
import ErrorDisplay from "../../ErrorDisplay";
import { getArticles } from "../api";
import ArticlesList from "./ArticlesList";

class FrontPage extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    const { topic, sort, votes, showComment } = this.props;
    showComment()
    getArticles(topic, sort, votes)
      .then(({ data }) => {
        this.setState({
          articles: data.articles,
          isLoading: false,
          err: null
        });
      })
      .catch(err => {
        this.setState({ err: err, isLoading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, sort, votes } = this.props;
    if (prevProps !== this.props) {
      getArticles(topic, sort, votes)
        .then(({ data }) => {
          this.setState({
            articles: data.articles,
            isLoading: false,
            err: null
          });
        })
        .catch(err => {
          this.setState({ err: err, isLoading: false });
        });
    }
  }

  render() {
    const { articles, isLoading, err } = this.state;
    const { topic } = this.props;

    if (err)
      return (
        <p>
          <ErrorDisplay {...err} />
        </p>
      );

    if (isLoading) return <p>LOADING... Getting the latest News!</p>;

    return (
        <main>
        <h3>
          Our Top Stories{" "}
          {topic
            ? "- all " + topic[0].toUpperCase() + topic.slice(1) + " articles"
            : null}
        </h3>
        <ArticlesList articles={articles} />
        </main>
    );
  }
}

export default FrontPage;
