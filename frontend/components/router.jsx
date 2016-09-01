import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
// Containers
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import UploadFormContainer from './track/upload_form_container';
import StreamContainer from './body/stream_container';
import UserStreamContainer from './body/user_stream_container';
// Actions
import { clearErrors } from '../actions/error_actions';

const AppRouter = ({store}) => {
  const clearErrorsAndRedirect = (nextState, replace) => {
    store.dispatch(clearErrors());
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  const clearErrorsAndEnsureLoggedIn = (nextState, replace) => {
    store.dispatch(clearErrors());
    if (!store.getState().session.currentUser) {
      replace('/login');
    }
  };

  return(
  <Router history={ hashHistory }>
    <Route path='/' component={ App } >
      <IndexRoute component={ StreamContainer } />
      <Route path='signup'
             component={ SignupFormContainer}
             onEnter={ clearErrorsAndRedirect } />
      <Route path='login'
             component={ LoginFormContainer}
             onEnter={ clearErrorsAndRedirect } />
      <Route path='upload'
             component={ UploadFormContainer}
             onEnter={ clearErrorsAndEnsureLoggedIn } />
           <Route path=':username'
             component={ UserStreamContainer }
             onEnter={ clearErrorsAndEnsureLoggedIn } />
    </Route>
  </Router>
);
};

export default AppRouter;
