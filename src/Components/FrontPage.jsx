import React, { Component } from 'react';
import axios from 'axios'
import ArticleList from './ArticleList';

class FrontPage extends Component {

state ={
  articles: []
}

componentDidMount () {
this.getArticles();

}

  render() {

    const {articles} =this.state

    return (
      <div>
        <h3>Our Top Stories</h3>

        <ArticleList articles={articles} />

      </div>
    );
  }

getArticles = () => {

return axios
.get(`https://nc-news-ianp.herokuapp.com/api/articles`)
.then(({data})=> {
   this.setState({articles: data.articles});
})
.catch(err => console.dir(err))
}

}

export default FrontPage;