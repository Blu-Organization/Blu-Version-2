import { currentUser } from '../actions/types.js';

const initialState = {
  user: ''
}

export default function currentUserReducer(state = initialState, action) {
  switch(action.type) {
    case currentUser:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}