import React, { Component } from 'react';
import axios from "axios"
import CommentList from './CommentList';

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
        <CommentList comments={comments}/>
        </section>
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

}

export default CommentSection;