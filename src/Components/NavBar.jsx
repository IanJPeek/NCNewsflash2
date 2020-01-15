import React from "react";
import { Link } from "@reach/router";

function NavBar(props) {
  return (
    <div className="NavBar">
      {/* <Link to="/">
        <button className="NavButton">
          <b>Home</b>
        </button>
      </Link>
      <label className="NavLabel">Select Topic: </label>
      <select>
        <option value="Cooking">Cooking</option>
        <option value="Football">Football</option>
      </select> */}
      <ul className="NavList">
        <li className="NavList">
          <Link to="/">
            <b className="NavList">HOME</b>
          </Link>
        </li>
        <li className="NavList">
          <b className="NavList">Select Topic: </b>
          <span> </span>
          <b>
            <Link to="/topics/coding">
              <b className="NavTopic">Coding</b>
            </Link>

            <Link to="/topics/cooking">
              <b className="NavTopic">Cooking</b>
            </Link>

            <Link to="/topics/football">
              <b className="NavTopic">Football</b>
            </Link>
          </b>
        </li>

        {/* <li className="NavList">
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
        </li> */}
      </ul>
    </div>
  );
}

export default NavBar;
