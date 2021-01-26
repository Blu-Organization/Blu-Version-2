import { FETCH_POSTS } from '../actions/types.js';

const initialState = {
  items: [],
  item: {title: 'wsup bro'}
}

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.data
      }
    default:
      return state;
  }
}
