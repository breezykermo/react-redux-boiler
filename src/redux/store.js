import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import { reducer } from './reducers/reducer';
import { routerMiddleware } from 'react-router-redux';

export function configureStore(history, initialState) {

  const routingMiddleware = routerMiddleware(history)

  // necessary for when loading from server (no dev tools, as no window)
  let devTools = f => f;
  if (false) {
    devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
  }

  const createFinalStore = compose(
    applyMiddleware(thunk, multi, routingMiddleware),
    devTools
  )(createStore);

  const store = createFinalStore(reducer, initialState);

  return store;
}
