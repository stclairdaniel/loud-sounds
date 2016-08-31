//Actions
import { TrackConstants, receiveTrack, receiveErrors } from '../actions/track_actions';
//Util
import { createTrack, receiveTrackErrors } from '../util/track_api_util';

const TrackMiddleware = ({getState, dispatch}) => next => action => {
  const handleErrors = errors => dispatch(receiveTrackErrors(errors.responseJSON));
  const handleTrack = track => dispatch(receiveTrack(track));
  switch(action.type) {
    case TrackConstants.CREATE_TRACK:
      createTrack(handleTrack, handleErrors, action.track);
      break;
    default:
      return next(action);
  }
};

export default TrackMiddleware;
