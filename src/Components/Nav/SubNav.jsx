import React from 'react';

function SubNav(props) {
  const {sortBy, hideCommentSort} = props
  return (
      <nav className="SubNav">
        <ul className="SubNav">
          <li>
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

export default SubNav;