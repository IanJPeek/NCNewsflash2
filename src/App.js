import "./App.css";
import Header from "./Components/Headers/Header";
import SubHeader from "./Components/Headers/SubHeader";
import FrontPage from "./Components/Articles_many/FrontPage";
import ArticlePage from "./Components/Article_one/ArticlePage";
import { Router } from "@reach/router";
import NavBar from "./Components/Nav/NavBar";
import React, { Component } from 'react';
import ErrorDisplay from "./ErrorDisplay";
import SubNav from "./Components/Nav/SubNav";
import LoggedIn from "./Components/Nav/LoggedIn"

class App extends Component {
  state = {
    loggedInUser: "jessjelly",
    sort: "",
    hideCommentSort: false,
    err: {response: {status:404,
    data: {msg: "Bad request - that didn't work"}}}
  };

  sortBy = sortType => {
    this.setState({ sort: sortType });
  };

  noComment = () => {
    this.setState({ hideCommentSort: true });
  };

  showComment = () => {
    this.setState({ hideCommentSort: false });
  };

  render() {
    const { loggedInUser, sort, hideCommentSort, err } = this.state;

    return (
      <div className="App">
        <div classname="headWrapper">
          <NavBar className="NavBar" sortBy={this.sortBy} />
          <SubNav
            className="SubNav"
            sortBy={this.sortBy}
            hideCommentSort={hideCommentSort}
          />
          <LoggedIn className="NavBar" id="LoggedIn" loggedInUser={loggedInUser} />
        </div>
        <Header className="Header" />
        <SubHeader className="SubHeader" />
        <Router>
          <FrontPage
            className="FrontPage"
            path="/"
            sort={sort}
            showComment={this.showComment}
          />
          <FrontPage
            className="TopicPage"
            path="/topics/:topic"
            sort={sort}
            showComment={this.showComment}
          />
          <ArticlePage
            className="ArticlePage"
            path="/articles/:article_id"
            sort={sort}
            noComment={this.noComment}
            loggedInUser={loggedInUser}
          />
          <ErrorDisplay default {...err}/>
        </Router>
      </div>
    );
  }
}

export default App;