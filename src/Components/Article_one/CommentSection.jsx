import React, { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { fetchComments } from "../api";

class CommentSection extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    this.getComments();
    this.setState({ isLoading: false });
    console.log(this.props, "comment props");
  }

  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>LOADING... Retrieving comments!</p>;

    return (
      <>
        <h3>Your Comments</h3>

        {/* fix B.end to return empty array */}
        {comments.length === 0 && (
          <p>
            <em>Nothing!</em> Start the conversation?
          </p>
        )}

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
    const { article_id, sort } = this.props;
    console.log(sort, "sort + getting comment");

    fetchComments(article_id, sort).then(({ data }) => {
      this.setState({ comments: data.comments, isLoading: false });
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { article_id, sort, votes } = this.props;
    console.log(sort, "sort + updating comment");
    if (prevProps !== this.props) {
      fetchComments(article_id, sort, votes).then(({ data }) => {
        this.setState({ comments: data.comments, isLoading: false });
      });
    }
  }

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
