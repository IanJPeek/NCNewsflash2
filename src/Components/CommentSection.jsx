import React, { Component } from 'react';
import axios from "axios"
import CommentList from './CommentList';
import AddComment from './AddComment';

class CommentSection extends Component {
  state = {comments: [],
    isLoading: true
  }
  
  componentDidMount() {
    this.getComments();
  }
  
  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>LOADING... Retrieving comments!</p>

    return (
      <div>
        <h3>Your Comments</h3>
        <section>
        <CommentList comments={comments}
        displayDeleted={this.displayDeleted}/>
        </section>
        <AddComment 
        article_id={this.props.article_id}
        displayAdded={this.displayAdded}
        />
      </div>
    );
  }

getComments = () => {
return axios
.get
  (`https://nc-news-ianp.herokuapp.com/api/articles/${this.props.article_id}/comments`)
  .then(({data}) => 
  {this.setState({comments:data.comments, isLoading: false})} 
  )
}

  displayAdded = (newPost) => {
    this.setState(currentState => {
      return { comments: [ ...currentState.comments, newPost.comment] }
    })
  }

  displayDeleted = (deletedPost) => {
    this.setState(currentState => {
      return { comments: currentState.comments.filter(comment => comment.comment_id !== deletedPost) }
    })
  }

  displayVote = (votedComment) => {
    const {comment_id} = votedComment.comment
    this.setState(currentState => {
      return { comments: [ , currentState.comments]}

    })
  }

}

export default CommentSection;