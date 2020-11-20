import { FETCH_POSTS, NEW_POST, COUNT } from './types.js';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => dispatch({
    type: FETCH_POSTS,
    data: data
  }))
}

export const increaseCount = () => ({
  type: COUNT
  })