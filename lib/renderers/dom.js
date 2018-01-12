import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import budgetApp from 'reducers';
import App from 'components/App';
import { loadState, saveState } from 'localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = createStore(
  budgetApp,
  persistedState
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
