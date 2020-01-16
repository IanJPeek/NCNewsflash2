import React, { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { fetchComments } from "../api";

class CommentSection extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    this.getComments();
  }

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>LOADING... Retrieving comments!</p>;

    return (
      <>
        <h3>Your Comments</h3>
        <section>
          <CommentList
            comments={comments}
            displayDeleted={this.displayDeleted}
          />
        </section>
        <AddComment
          article_id={this.props.article_id}
          displayAdded={this.displayAdded}
        />
      </>
    );
  }

  getComments = () => {
    const { article_id } = this.props;

    fetchComments(article_id).then(({ data }) => {
      this.setState({ comments: data.comments, isLoading: false });
    });
  };

  displayAdded = newPost => {
    this.setState(currentState => {
      return { comments: [...currentState.comments, newPost.comment] };
    });
  };

  displayDeleted = deletedPost => {
    this.setState(currentState => {
      return {
        comments: currentState.comments.filter(
          comment => comment.comment_id !== deletedPost
        )
      };
    });
  };
}

export default CommentSection;
