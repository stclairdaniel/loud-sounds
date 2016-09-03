//Actions
import { TrackConstants, receiveTrack, receiveTracks } from '../actions/track_actions';
import { receiveErrors } from '../actions/error_actions';
//Util
import { createTrack, requestTrack, deleteTrack, editTrack, requestTracks, requestUserTracks } from '../util/track_api_util';
import { hashHistory } from 'react-router'

const TrackMiddleware = ({getState, dispatch}) => next => action => {
  const handleErrors = errors => dispatch(receiveErrors(errors.responseJSON));
  const handleTrack = track => dispatch(receiveTrack(track));
  const handleTracks = tracks => dispatch(receiveTracks(tracks));
  switch(action.type) {
    case TrackConstants.CREATE_TRACK:
      createTrack(handleTrack, handleErrors, action.track);
      break;
    case TrackConstants.REQUEST_TRACK:
      requestTrack(handleTrack, handleErrors, action.trackId);
      break;
    case TrackConstants.DELETE_TRACK:
      deleteTrack(null, handleErrors, action.trackId);
      next(action);
      break;
    case TrackConstants.EDIT_TRACK:
      const redirect = () => {
        hashHistory.push('/');
      };
      editTrack(redirect, handleErrors, action.track);
      break;
    case TrackConstants.REQUEST_TRACKS:
      requestTracks(handleTracks, handleErrors);
      break;
    case TrackConstants.REQUEST_USER_TRACKS:
      requestUserTracks(handleTracks, handleErrors, action.username);
      break;
    default:
      return next(action);
  }
};

export default TrackMiddleware;
