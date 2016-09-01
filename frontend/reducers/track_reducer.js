import { TrackConstants } from '../actions/track_actions';
import merge from 'lodash/merge';

const TrackReducer = (state = {}, action) => {
  switch(action.type) {
    case TrackConstants.RECEIVE_TRACK:
      return merge({}, state, action.track);
    default:
      return state;
  }
};

export default TrackReducer;
