//Actions
import { TrackConstants, receiveTrack, receiveTracks } from '../actions/track_actions';
import { receiveErrors } from '../actions/error_actions';
//Util
import { createTrack, requestTrack, requestTracks } from '../util/track_api_util';

const TrackMiddleware = ({getState, dispatch}) => next => action => {
  const handleErrors = errors => dispatch(receiveErrors(errors.responseJSON));
  const handleTrack = track => dispatch(receiveTrack(track));
  switch(action.type) {
    case TrackConstants.CREATE_TRACK:
      createTrack(handleTrack, handleErrors, action.track);
      break;
    case TrackConstants.REQUEST_TRACK:
      requestTrack(handleTrack, handleErrors, action.track);
      break;
    case TrackConstants.REQUEST_TRACKS:
      const handleTracks = tracks => dispatch(receiveTracks(tracks));
      requestTracks(handleTracks, handleErrors);
    default:
      return next(action);
  }
};

export default TrackMiddleware;
