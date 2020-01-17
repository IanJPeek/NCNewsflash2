import React from "react";
import { Link } from "@reach/router";
import LoggedIn from "./LoggedIn";

function NavBar(props) {
  return (
    <nav className="NavBar">
      <ul className="NavList">
        <li className="NavList">
          <Link to="/">
            <b className="NavList">HOME</b> &emsp;
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
      </ul>
      <LoggedIn/>
    </nav>
  );
}

export default NavBar;
