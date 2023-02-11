/* eslint-disable import/prefer-default-export */
import React from 'react';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    {element}
  </Provider>
);
/* eslint-disable import/prefer-default-export */
