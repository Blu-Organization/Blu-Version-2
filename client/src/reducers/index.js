import { combineReducers } from 'redux';
import postReducer from './postReducer.js';
import countReducer from './countReducer.js';

export default combineReducers({
  posts: postReducer,
  count: countReducer
});