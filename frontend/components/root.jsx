import { Provider } from 'react-redux';
import AppRouter from './router';
import React from 'react';

const Root = ({store}) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default Root;
