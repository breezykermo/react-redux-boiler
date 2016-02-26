import { combineReducers } from 'redux';
import { grindWheel } from './grindWheel';
import { routeReducer } from 'react-router-redux';

export const reducer = combineReducers({
  routing: routeReducer,
  grindWheel,
});
