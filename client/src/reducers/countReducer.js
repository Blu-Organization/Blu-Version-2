import { COUNT } from '../actions/types.js';

const initialState = {
  count: 0
}

export default function(state = initialState, action) {
  switch(action.type) {
    case COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state;
  }
}