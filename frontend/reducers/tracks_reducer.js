import { TrackConstants } from '../actions/track_actions';
import merge from 'lodash/merge';

const TracksReducer = (state = {}, action) => {
  switch(action.type) {
    case TrackConstants.RECEIVE_TRACK:
      const track = action.track;
      return merge({}, state, {track});
    default:
      return state;
  }
};

export default TracksReducer;
