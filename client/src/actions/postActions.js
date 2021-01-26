import {
  FETCH_POSTS,
  currentGame,
  currentUser
} from './types.js';

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

export const fetchCurrentUser = (user) => ({
  type: currentUser,
  user
  })