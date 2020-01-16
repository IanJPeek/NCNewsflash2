import axios from "axios";

export const getArticles = (topic, sort, votes) => {
  return axios.get(`https://nc-news-ianp.herokuapp.com/api/articles`, {
    params: {
      topic: topic,
      sort_by: sort,
      votes: votes
    }
  });
};

export const getOneArticle = (article_id) => {
  return axios.get(
    `https://nc-news-ianp.herokuapp.com/api/articles/${article_id}`
  );
}

export const fetchComments = (article_id) => {
  return axios.get(
    `https://nc-news-ianp.herokuapp.com/api/articles/${article_id}/comments`
  );
}


export const handlePost = (article_id, usernameInput, commentInput) => {
  return axios.post(
    `https://nc-news-ianp.herokuapp.com/api/articles/${article_id}/comments`,
    { username: usernameInput, body: commentInput }
  );
};

export const patchVote = (request, changeValue) => {
  return axios.patch(`https://nc-news-ianp.herokuapp.com/api/${request}`, {
    inc_votes: changeValue
  });
}

export const handleDelete = (comment_id) => {
return axios.delete(
  `https://nc-news-ianp.herokuapp.com/api/comments/${comment_id}`
);
}