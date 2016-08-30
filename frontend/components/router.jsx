import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
// Containers
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


const AppRouter = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={ App } >
      <Route path='signup' component={ SignupFormContainer} />
      <Route path='login' component={ LoginFormContainer} />
    </Route>
  </Router>
);

export default AppRouter;
