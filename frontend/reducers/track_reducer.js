import { TrackConstants } from '../actions/track_actions';
import merge from 'lodash/merge';

const TrackReducer = (state = {errors: []}, action) => {
  switch(action.type) {
    case TrackConstants.RECEIVE_TRACK:
      return merge({}, state, action.track);
    case TrackConstants.RECEIVE_TRACK_ERRORS:
      return merge({}, {errors: [...action.errors]});
    case TrackConstants.CLEAR_TRACK_ERRORS:
      return merge({}, {errors: []});
    default:
      return state;
  }
};

export default TrackReducer;
