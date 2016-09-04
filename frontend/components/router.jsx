import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import App from './app';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import UploadFormContainer from './track/upload_form_container';
import StreamContainer from './body/stream_container';
import UserStreamContainer from './body/user_stream_container';
import TrackContainer from './track/track_container';
import EditFormContainer from './track/edit_form_container';

// Actions
import { clearErrors } from '../actions/error_actions';
import { requestUser } from '../actions/user_actions';
import * as TrackActions from '../actions/track_actions';

const AppRouter = ({store}) => {

  const getTrack = (nextState) => {
    store.dispatch(TrackActions.requestTrack(nextState.params.id));
  };

  const getTrackAndEnsureAuthor = (nextState) => {
    store.dispatch(TrackActions.requestTrack(nextState.params.id));
    //find a way to check the track user id
  };

  const getTracks = () => {
    store.dispatch(TrackActions.requestTracks());
  };

  const getUserTracksAndUser = (nextState) => {
    store.dispatch(TrackActions.clearTracks());
    store.dispatch(TrackActions.requestUserTracks(nextState.params.username));
    store.dispatch(requestUser(nextState.params.username));
  };

  const redirectIfLoggedIn = (nextState, replace) => {
    store.dispatch(clearErrors());
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  const ensureLoggedIn = (nextState, replace) => {
    store.dispatch(clearErrors());
    store.dispatch(TrackActions.clearTracks());
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
             onEnter={ redirectIfLoggedIn } />
      <Route path='login'
             component={ LoginFormContainer }
             onEnter={ redirectIfLoggedIn } />
      <Route path='upload'
             component={ UploadFormContainer }
             onEnter={ ensureLoggedIn } />
      <Route path='edit'>
       <Route path=':id'
              component={ EditFormContainer }
              onEnter={ getTrackAndEnsureAuthor } />
      </Route>
      <Route path=':username'
             component={ UserStreamContainer }
             onEnter={ getUserTracksAndUser } >
        <Route path=':id'
               component={ TrackContainer }
               onEnter={ getTrack } />
      </Route>
    </Route>
  </Router>
);
};

export default AppRouter;
