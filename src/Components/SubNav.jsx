import React from 'react';

function SubNav(props) {
  return (
    <div className="NavBar">
      <ul className="NavBar">
        <li className="NavList">
          <b className="NavList">Order by: </b>
          <span> </span>

          <button className="NavButton">
            <b
              className="NavTopic"
              onClick={() => {
                props.sortBy("comment_count");
              }}
            >
              Comments
            </b>
          </button>

          <button className="NavButton">
            <b
              className="NavTopic"
              onClick={() => {
                props.sortBy("created_at");
              }}
            >
              Created
            </b>
          </button>

          <button className="NavButton">
            <b
              className="NavTopic"
              onClick={() => {
                props.sortBy("votes");
              }}
            >
              Votes
            </b>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SubNav;