import React from "react";
import "./App.css";
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";
import FrontPage from "./Components/FrontPage";
import ArticlePage from "./Components/ArticlePage";
import { Router } from "@reach/router";
import NavBar from "./Components/NavBar";
import TopicPage from "./Components/TopicPage";


// class App extends Component {
//   render() {

function App() {

const sortBy = () => {

}

  return (
    <div className="App">
      <NavBar className="NavBar" />
      <Header className="Header" />
      <SubHeader className="SubHeader" />
      <Router>
        <FrontPage className="FrontPage" path="/" />
        <TopicPage className="TopicPage" path="/topics/:topic" />
        <ArticlePage className="ArticlePage" path="/articles/:article_id" />
      </Router>
    </div>
  );
}

// Link Does not necessarily mean you have access to information props -> parametric endpoints give you props from routing
// axios params -> syntax is independent of browser url. you may want variables from the url in there... but you can do that yourself. 

// fix that axios params JUST FOR FRONT PAGE -> to get the sorting

export default App;


// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }

// export default App;