import React from 'react';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import { store } from './index';

const App = (props) => {
  const history = syncHistoryWithStore(browserHistory, store)
  return (
    <div>
      <Router history={history} routes={routes} />
    </div>
  );
};

export default App;