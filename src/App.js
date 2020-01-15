// import React from "react";
import "./App.css";
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";
import FrontPage from "./Components/FrontPage";
import ArticlePage from "./Components/ArticlePage";
import { Router } from "@reach/router";
import NavBar from "./Components/NavBar";
import React, { Component } from 'react';
import ErrorDisplay from "./ErrorDisplay";

class App extends Component {
  state = {
    sort: ""
  };

  // invoke function to put queries into state... (may need to reset to blank state after?)
  // eg ?sort_by=comment_count
  // eg ?sort_by=created_at

  sortBy = sortType => {
    this.setState({ sort: sortType });
  };

  render() {
    return (
      <div className="App">
        <NavBar className="NavBar" sortBy={this.sortBy} />
        <Header className="Header" />
        <SubHeader className="SubHeader" />
        <Router>
          <FrontPage className="FrontPage" path="/" sort={this.state.sort} />
          <FrontPage
            className="TopicPage"
            path="/topics/:topic"
            sort={this.state.sort}
          />
          <ArticlePage className="ArticlePage" path="/articles/:article_id" />
          <ErrorDisplay default />
        </Router>
      </div>
    );
  }
}

export default App;