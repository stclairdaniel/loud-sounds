import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    const store = window.store = configureStore(preloadedState);
  } else {
    const store = window.store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);
});
