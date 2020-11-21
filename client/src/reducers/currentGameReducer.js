import { currentGame } from '../actions/types.js';

const initialState = {
  game: ''
}

export default function currentGameReducer(state = initialState, action) {
  switch(action.type) {
    case currentGame:
      return {
        ...state,
        game: action.game
      }
    default:
      return state;
  }
}