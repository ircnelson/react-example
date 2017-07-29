import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/App';
import reducers from './reducers';

const history = createBrowserHistory();
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();