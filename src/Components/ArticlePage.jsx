import React, { Component } from "react";
import axios from "axios";
import CommentSection from "./CommentSection";

class ArticlePage extends Component {
  state = {
    article: {},
    isLoading: true
  };

  componentDidMount() {
    this.getArticle();
  }

  render() {
    const { article} = this.state;
    const {title, body, author} = article
    const {article_id} = this.props

    return (
      <div>
        <h3>Article Page</h3>
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
        this.setState({ article: data.article, isLoading: false });
      });
  };
}

export default ArticlePage;
