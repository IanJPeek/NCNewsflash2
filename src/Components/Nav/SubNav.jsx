import React, { Component } from "react";

class SubNav extends Component {
  state = {
    hideCommentSort: false
  };

// noComment = () => {
//   this.setState({hideCommentSort: true})
// }

//   showComment = () => {
//     this.setState({ hideCommentSort: false })
//   }

  render() {
const {sortBy, hideCommentSort} =this.props
// const {hideCommentSort} = this.state

    return (
      <nav className="SubNav">
        <ul className="SubNav">
          <li
          // className="NavList"
          >
            <b className="NavList">Order by: </b> &ensp;
            <span> </span>
            <button className="NavButton">
              <b
                className="NavTopic"
                onClick={() => {
                  sortBy("comment_count");
                }}
                hidden={hideCommentSort}
              >
                Comments
              </b>
            </button>
            <button className="NavButton">
              <b
                className="NavTopic"
                onClick={() => {
                  sortBy("created_at");
                }}
              >
                Created
              </b>
            </button>
            <button className="NavButton">
              <b
                className="NavTopic"
                onClick={() => {
                  sortBy("votes");
                }}
              >
                Votes
              </b>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SubNav;
