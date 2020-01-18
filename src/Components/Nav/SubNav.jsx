import React from "react";

function SubNav(props) {
  return (
    <nav className="SubNav">
      <ul className="SubNav">
        <li 
        // className="NavList"
        >
          <b 
          className="NavList"
          >Order by: </b> &ensp;
          <span> </span>

          <button className="NavButton">
            <b
              className="NavTopic"
              onClick={() => {
                props.sortBy("comment_count");
              }}
              // hidden={hideCommentSort}
            >
              Comments
            </b>
          </button>

          <button className="NavButton">
            <b
              className="NavTopic"
              onClick={() => {console.log("sort created")
                props.sortBy("created_at");
              }}
            >
              Created
            </b>
          </button>

          <button className="NavButton">
            <b
              className="NavTopic"
              onClick={() => {console.log("sort votes")
                props.sortBy("votes");
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
