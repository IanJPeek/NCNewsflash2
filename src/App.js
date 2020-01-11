import React from 'react';
import './App.css';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import FrontPage from './Components/FrontPage';
import {Router} from "@reach/router";
import ArticlePage from './Components/ArticlePage';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar className="NavBar" />
      <Header className="Header" />
      <SubHeader className="SubHeader" />
      <Router>
        <FrontPage className="FrontPage" path="/" />
        <FrontPage className="ArticleTopics" path="/topics/:topic" />
        <ArticlePage className="ArticlePage" path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
