//Actions
import { TrackConstants, receiveTrack } from '../actions/track_actions';
import { receiveErrors } from '../actions/error_actions';
//Util
import { createTrack } from '../util/track_api_util';

const TrackMiddleware = ({getState, dispatch}) => next => action => {
  const handleErrors = errors => dispatch(receiveErrors(errors.responseJSON));
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
