import React from 'react';
import {Link} from "@reach/router"
import axios from "axios"

function NavBar(props) {

// const filterBy = () => {

// const queryExample = "?=" +

//   axios
//     .get(
//       `https://nc-news-ianp.herokuapp.com/api/articles/${this.props.article_id}`
//     )
//     .then(({ data }) => {
//       this.setState({ article: data.article, isLoading: false });
//     });
// }


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

        <li className="NavList">
        <b className="NavList">Order by: </b>
          <span> </span>
          <Link to="/?sort_by=comment_count&order_by=desc">
            <b className="NavTopic" 
            // onClick={sortPass(category)}
            >Comments</b>
          </Link>

          <Link to="/?sort_by=created_at&order_by=desc">
            <b className="NavTopic">Created</b>
          </Link>

          {/* <select>
            <option value="commentCount">Comment Count</option>
            <option value="Football">Football</option>
            </select> */}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;