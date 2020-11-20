import { FETCH_POSTS, NEW_POST } from '../actions/types.js';

const initialState = {
  items: [],
  item: {title: 'wsup bro'}
}

export default function(state = initialState, action) {
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
