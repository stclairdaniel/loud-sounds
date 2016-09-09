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
import TrackDetailContainer from './track/track_detail_container';
import EditFormContainer from './track/edit_form_container';
import Errors from './errors/errors';

// Actions
import { clearErrors } from '../actions/error_actions';
import { requestUser, requestLikedTracks } from '../actions/user_actions';
import * as TrackActions from '../actions/track_actions';

const AppRouter = ({store}) => {

  const getTrack = (nextState) => {
    store.dispatch(TrackActions.requestTrack(nextState.params.id));
  };


  //this is CLUNKY. There are a lot of conditions to check though...
  const EnsureAuthor = (nextState, replace) => {
    //redirect to track page on refresh - otherwise user is undefined
    if (Object.keys(store.getState().tracks).length === 0) {
      replace(`/${nextState.params.username}/tracks/${nextState.params.id}`);
    } else {
    store.dispatch(TrackActions.requestTrack(nextState.params.id));
    store.dispatch(requestUser(nextState.params.username));
    if (!store.getState().session.currentUser ||
        nextState.params.username !== store.getState().tracks[parseInt(nextState.params.id)].user.username || (nextState.params.username !== store.getState().session.currentUser.username))
      {
        store.dispatch(TrackActions.requestTracks());
        replace('/');
      }
    }
  };

  const getTracks = () => {
    store.dispatch(TrackActions.requestTracks());
  };

  const getLikedTracks = (nextState) => {
    store.dispatch(requestLikedTracks(nextState.params.username));
    store.dispatch(requestUser(nextState.params.username));
  };

  const getGenreTracks = (nextState) => {
    store.dispatch(TrackActions.requestGenreTracks(nextState.params.genre));
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
      <Route path='error' component={ Errors } />
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
      <Route path=':username/likes'
             component={ UserStreamContainer }
             onEnter={ getLikedTracks } />
           <Route path=':username/tracks/:id'
             component={ TrackDetailContainer }
             onEnter={ getTrack } />
      <Route path=':username/:id/edit'
             component={ EditFormContainer }
             onEnter={ EnsureAuthor } />
           <Route path='genre/:genre'
             component={ StreamContainer}
             onEnter={ getGenreTracks } />
    </Route>

  </Router>
);
};

export default AppRouter;
