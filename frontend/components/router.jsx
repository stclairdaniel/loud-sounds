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
import EditFormContainer from './track/edit_form_container';
// Actions
import { clearErrors } from '../actions/error_actions';
import { receiveTrack, requestTracks, requestUserTracks, clearTracks, requestTrack } from '../actions/track_actions';

const AppRouter = ({store}) => {

  const getTrack = (nextState) => {
    store.dispatch(requestTrack(nextState.params.id));
  };

  const getTrackAndEnsureAuthor = (nextState) => {
    store.dispatch(requestTrack(nextState.params.id));
    //find a way to check the track user id
  };

  const getTracks = () => {
    store.dispatch(requestTracks());
  };

  const getUserTracks = (nextState) => {
    store.dispatch(clearTracks());
    store.dispatch(requestUserTracks(nextState.params.username));
  };

  const Redirect = (nextState, replace) => {
    store.dispatch(clearErrors());
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  const EnsureLoggedIn = (nextState, replace) => {
    store.dispatch(clearErrors());
    store.dispatch(clearTracks());
    if (!store.getState().session.currentUser) {
      replace('/login');
    }
  };

  return(
  <Router history={ hashHistory }>
    <Route path='/' component={ App } >
      <IndexRoute component={ StreamContainer } onEnter={ getTracks } />
      <Route path='signup'
             component={ SignupFormContainer }
             onEnter={ Redirect } />
      <Route path='login'
             component={ LoginFormContainer }
             onEnter={ Redirect } />
      <Route path='upload'
             component={ UploadFormContainer }
             onEnter={ EnsureLoggedIn } />
      <Route path='edit'>
       <Route path=':id'
              component={ EditFormContainer }
              onEnter={ getTrackAndEnsureAuthor } />
      </Route>
      <Route path=':username'
             component={ UserStreamContainer }
             onEnter={ getUserTracks } >
        <Route path=':id'
               component={ TrackContainer }
               onEnter={ getTrack } />
      </Route>
    </Route>
  </Router>
);
};

export default AppRouter;
