import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import {configureStore} from './redux/store';

import App from './App';

const state = window.__initialState__ || undefined;
export const store = configureStore(browserHistory, state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);