import { combineReducers } from 'redux';
import postReducer from './postReducer.js';
import currentGameReducer from './currentGameReducer.js';

export default combineReducers({
  posts: postReducer,
  currentGameReducer: currentGameReducer
});