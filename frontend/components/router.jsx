import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
// Containers
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// Actions
import { clearErrors } from '../actions/session_actions';

const AppRouter = ({store}) => {
  const clearErrorsOnEnter = () => {
    store.dispatch(clearErrors());
  };

  return(
  <Router history={ hashHistory }>
    <Route path='/' component={ App } >
      <Route path='signup'
             component={ SignupFormContainer}
             onEnter={clearErrorsOnEnter} />
      <Route path='login'
             component={ LoginFormContainer}
             onEnter={clearErrorsOnEnter} />
    </Route>
  </Router>
);
};

export default AppRouter;
