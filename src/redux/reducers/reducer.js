import { combineReducers } from 'redux';
import { grindWheel } from './grindWheel';
import { members } from './members';
import { routerReducer } from 'react-router-redux';

export const reducer = combineReducers({
  routing: routerReducer,
  grindWheel,
  members,
});
