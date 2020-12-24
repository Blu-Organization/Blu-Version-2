import { combineReducers } from 'redux';
import postReducer from './postReducer.js';
import currentGameReducer from './currentGameReducer.js';
import currentUserReducer from './currentUserReducer.js';

export default combineReducers({
  posts: postReducer,
  currentGameReducer: currentGameReducer,
  currentUserReducer: currentUserReducer
});