import React from 'react';

function SubNav(props) {
  return (
    <div>
      <ul>
        <li className="NavList">
          <b className="NavList">Order by: </b>
          <span> </span>
          {/* <Link to="/?sort_by=comment_count&order_by=desc"> */}
          <b
            className="NavTopic"
            onClick={() => {
              props.sortBy("comment_count");
            }}
          >
            Comments
          </b>
          {/* </Link> */}

          {/* <Link to="/?sort_by=created_at&order_by=desc"> */}
          <b
            className="NavTopic"
            onClick={() => {
              props.sortBy("created_at");
            }}
          >
            Created
          </b>
          {/* </Link> */}

          {/* <select>
            <option value="commentCount">Comment Count</option>
            <option value="Football">Football</option>
            </select> */}
          <b
            className="NavTopic"
            onClick={() => {
              props.sortBy("votes");
            }}
          >
            Votes
          </b>
        </li>
      </ul>
    </div>
  );
}

export default SubNav;