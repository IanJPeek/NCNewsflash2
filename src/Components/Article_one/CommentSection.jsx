import React, { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { fetchComments } from "../api";

class CommentSection extends Component {
  state = { comments: [], 
            isLoading: true };

  componentDidMount() {
    this.getComments();
    this.setState({ isLoading: false });
  }

  render() {
    const { comments, isLoading } = this.state;
    const {article_id, loggedInUser} = this.props
    if (isLoading) return <p>LOADING... Retrieving comments!</p>;

    return (
      <>
        <h3 className="CommentsHeader">Your Comments</h3>
        {(comments === undefined ||comments.length === 0)  && (
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
          article_id={article_id}
          displayAdded={this.displayAdded}
          loggedInUser={loggedInUser}
        />
      </>
    );
  }

  getComments = () => {
    const { article_id, sort } = this.props;
    fetchComments(article_id, sort).then(({ data }) => {
      this.setState({ comments: data.comments, isLoading: false });
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { article_id, sort, votes } = this.props;
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
