import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
// Containers
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import UploadFormContainer from './track/upload_form_container';
import StreamContainer from './body/stream_container';
import UserStreamContainer from './body/user_stream_container';
import TrackContainer from './track/track_container';
// Actions
import { clearErrors } from '../actions/error_actions';
import { receiveTrack, requestTracks, requestUserTracks } from '../actions/track_actions';

const AppRouter = ({store}) => {

  const getTracks = () => {
    store.dispatch(requestTracks());
  };

  const getUserTracks = () => {
    //get username from URL
    const match = window.location.hash.match(/[^#\/"][a-zA-Z0-9-_%]*/);
    const username = match[0].replace(/%20/, " ");
    store.dispatch(requestUserTracks(username));
  };

  const Redirect = (nextState, replace) => {
    store.dispatch(clearErrors());
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  const EnsureLoggedIn = (nextState, replace) => {
    store.dispatch(clearErrors());
    if (!store.getState().session.currentUser) {
      replace('/login');
    }
  };

  return(
  <Router history={ hashHistory }>
    <Route path='/' component={ App } >
      <IndexRoute component={ StreamContainer } onEnter={ getTracks } />
      <Route path='signup'
             component={ SignupFormContainer}
             onEnter={ Redirect } />
      <Route path='login'
             component={ LoginFormContainer}
             onEnter={ Redirect } />
      <Route path='upload'
             component={ UploadFormContainer}
             onEnter={ EnsureLoggedIn } />
      <Route path=':username'
             component={ UserStreamContainer }
             onEnter={ getUserTracks } >
             //fix to only get specific track
        <Route path=':title'
               component={ TrackContainer }
               onEnter={ getTracks } />
      </Route>
    </Route>
  </Router>
);
};

export default AppRouter;
