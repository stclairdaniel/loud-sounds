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


  //this is CLUNKY. There are a lot of conditions to check though...
  const EnsureAuthor = (nextState, replace) => {
    store.dispatch(TrackActions.requestTrack(nextState.params.id));
    store.dispatch(requestUser(nextState.params.username));
    if (!store.getState().session.currentUser ||
        nextState.params.username !== store.getState().tracks[parseInt(nextState.params.id)].user.username || (nextState.params.username !== store.getState().session.currentUser.username))
      {
        store.dispatch(TrackActions.requestTracks());
        replace('/');
      }
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
      <Route path=':username'
             component={ UserStreamContainer }
             onEnter={ getUserTracksAndUser } />
      <Route path=':username/:id'
             component={ StreamContainer }
             onEnter={ getTrack } />
      <Route path=':username/:id/edit'
             component={ EditFormContainer }
             onEnter={ EnsureAuthor } />
    </Route>
  </Router>
);
};

export default AppRouter;
