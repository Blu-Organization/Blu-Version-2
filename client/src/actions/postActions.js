import { FETCH_POSTS, NEW_POST, currentGame } from './types.js';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => dispatch({
    type: FETCH_POSTS,
    data: data
  }))
}

export const fetchCurrentGame = (game) => ({
  type: currentGame,
  game
  })