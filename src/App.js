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
    sort: ""
  };

  sortBy = sortType => {
    this.setState({ sort: sortType });
  };

  render() {
    return (
      <div className="App">
        <div classname="headWrapper">
          <NavBar className="NavBar" sortBy={this.sortBy} />
          <SubNav className="SubNav" sortBy={this.sortBy} />
          <LoggedIn className="NavBar" id="LoggedIn" />
        </div>
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