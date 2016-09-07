//Actions
import { TrackConstants, receiveTrack, receiveTracks } from '../actions/track_actions';
import { receiveErrors } from '../actions/error_actions';
import { receiveTrackSearchResults } from '../actions/search_actions';
//Util
import { createTrack, requestTrack, deleteTrack, editTrack, requestTracks, requestUserTracks, requestTracksLike, requestGenreTracks } from '../util/track_api_util';
import { hashHistory } from 'react-router';

const TrackMiddleware = ({getState, dispatch}) => next => action => {
  const handleErrors = errors => dispatch(receiveErrors(errors.responseJSON));
  const handleTrack = track => dispatch(receiveTrack(track));
  const handleTracks = tracks => dispatch(receiveTracks(tracks));
  const redirect = () => hashHistory.push(`/${action.track.username}`);

  switch(action.type) {
    case TrackConstants.CREATE_TRACK:
      createTrack(redirect, handleErrors, action.track);
      break;
    case TrackConstants.REQUEST_TRACK:
      requestTrack(handleTrack, handleErrors, action.trackId);
      break;
    case TrackConstants.DELETE_TRACK:
      deleteTrack(null, handleErrors, action.trackId);
      next(action);
      break;
    case TrackConstants.EDIT_TRACK:
      editTrack(redirect, handleErrors, action.track);
      break;
    case TrackConstants.REQUEST_TRACKS:
      requestTracks(handleTracks, handleErrors);
      break;
    case TrackConstants.REQUEST_USER_TRACKS:
      requestUserTracks(handleTracks, handleErrors, action.username);
      break;
    case TrackConstants.REQUEST_TRACKS_LIKE:
      const handleSearch = tracks => dispatch(receiveTrackSearchResults(tracks));
      requestTracksLike(handleSearch, null, action.title);
      break;
    case TrackConstants.REQUEST_GENRE_TRACKS:
      requestGenreTracks(handleTracks, null, action.genre);
      break;
    default:
      return next(action);
  }
};

export default TrackMiddleware;
