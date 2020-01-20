import axios from "axios";

const baseURL = `https://nc-news-ianp.herokuapp.com/api`

export const getArticles = (topic, sort, votes) => {
  return axios.get(`${baseURL}/articles`, {
    params: {
      topic: topic,
      sort_by: sort,
      votes: votes
    }
  });
};

export const getOneArticle = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}`);
}

export const fetchComments = (article_id, sort, votes) => {
  return axios.get(`${baseURL}/articles/${article_id}/comments`, {
    params: {
      sort_by: sort,
      votes: votes
    }
  });
}

export const handlePost = (article_id, usernameInput, commentInput) => {
  return axios.post(`${baseURL}/articles/${article_id}/comments`, {
    username: usernameInput,
    body: commentInput
  });
};

export const patchVote = (request, changeValue) => {
  return axios.patch(`${baseURL}/${request}`, {
    inc_votes: changeValue
  });
}

export const handleDelete = (comment_id) => {
return axios.delete(`${baseURL}/comments/${comment_id}`);
}