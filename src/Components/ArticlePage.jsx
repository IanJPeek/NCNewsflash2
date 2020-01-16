import React, { Component } from "react";
import CommentSection from "./CommentSection";
import ErrorDisplay from "../ErrorDisplay";
import { getOneArticle } from "./api";

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };

  componentDidMount() {
    this.getArticle();
  }

  render() {
    const { article, isLoading, err } = this.state;
    const { title, body, author } = article;
    const { article_id } = this.props;

    if (err)
      return (
        <p>
          {" "}
          <ErrorDisplay {...err} />
          {err.response.status}-{err.response.data.msg}
        </p>
      );
    if (isLoading) return <p>Finding your article...</p>;

    return (
        <article className="singleArticle">
          <h2>{title} </h2> <p>by {author}</p>
          <p></p>
          <p>{body}</p>
        <section>
          <CommentSection article_id={article_id} />
        </section>
        </article>
    );
  }

  getArticle = () => {
    const { article_id } = this.props;

    getOneArticle(article_id)
      .then(({ data }) => {
        this.setState({ article: data.article, isLoading: false, err: null });
      })
      .catch(err => {
        console.dir(err);
        this.setState({ err: err, isLoading: false });
      });
  };
}

export default ArticlePage;
