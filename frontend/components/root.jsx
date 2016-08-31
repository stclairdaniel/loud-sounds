import { Provider } from 'react-redux';
import AppRouter from './router';
import React from 'react';

const Root = ({store}) => (
  <Provider store={store}>
    <AppRouter store={store} />
  </Provider>
);

export default Root;
