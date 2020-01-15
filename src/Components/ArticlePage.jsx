import React, { Component } from "react";
import axios from "axios";
import CommentSection from "./CommentSection";
import ErrorDisplay from "../ErrorDisplay";

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
    const { article, isLoading, err} = this.state;
    const {title, body, author} = article
    const {article_id} = this.props

    if (err) return <p> <ErrorDisplay {...err} />

      {err.response.status}-
    {err.response.data.msg}</p>
    if (isLoading) return <p>Finding your article...</p>

    return (
      <div>
        {/* <h3>Article Page</h3> */}
        <article className="singleArticle">
          <h2>{title} </h2> <p>by {author}</p>
          <p>
            {/* <b>Author:</b> {article.author} */}
          </p>
          <p>{body}</p>
        </article>
        <section>
          <CommentSection article_id={article_id}/>
        </section>
      </div>
    );
  }

  getArticle = () => {
    axios
      .get(
        `https://nc-news-ianp.herokuapp.com/api/articles/${this.props.article_id}`
      )
      .then(({ data }) => {
        this.setState({ article: data.article, isLoading: false })
      })
        .catch(err => {
          console.dir(err);
            this.setState({ err: err });
      });
  };
};


export default ArticlePage;
