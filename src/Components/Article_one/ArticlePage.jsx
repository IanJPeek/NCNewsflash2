import React, { Component } from "react";
import CommentSection from "./CommentSection";
import ErrorDisplay from "../../ErrorDisplay";
import { getOneArticle } from "../api";

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };

  componentDidMount() {
    const { noComment } = this.props;
    noComment();
    this.getArticle();
  }

  render() {
    const { article, isLoading, err } = this.state;
    const { title, body, author } = article;
    const { article_id, sort, loggedInUser } = this.props;

    if (err)
      return (
        <p>
          <ErrorDisplay {...err} />
        </p>
      );
    if (isLoading) return <p>Finding your article...</p>;

    return (
      <article className="singleArticle">
        <h2 className="articleHead">{title} </h2>
        <p className="articleAuthor">
          by <em>{author}</em>
        </p>
        <main>{body}</main>
        <section>
          <CommentSection
            article_id={article_id}
            sort={sort}
            loggedInUser={loggedInUser}
          />
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
        this.setState({ err: err, isLoading: false });
      });
  };
}

export default ArticlePage;
