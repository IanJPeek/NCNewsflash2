import React from 'react';
import './App.css';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import FrontPage from './Components/FrontPage';
import {Router} from "@reach/router";
import ArticlePage from './Components/ArticlePage';

function App() {
  return (
    <div className="App">
      <Header className="Header" />
        <SubHeader className="SubHeader" />
      <Router>
        <FrontPage className="FrontPage" path="/" />
        <ArticlePage className="ArticlePage" path="/articles/:article_id"/>
      </Router>
    </div>
  );
}

export default App;
