import { TrackConstants } from '../actions/track_actions';
import merge from 'lodash/merge';

const TracksReducer = (state = {}, action) => {
  switch(action.type) {
    case TrackConstants.RECEIVE_TRACK:
      return action.track;
    case TrackConstants.RECEIVE_TRACKS:
      return action.tracks;
    case TrackConstants.DELETE_TRACK:
      let newState = merge({}, state);
      delete newState[action.trackId];
      return newState;
    case TrackConstants.CLEAR_TRACKS:
      return {};
    default:
      return state;
  }
};

export default TracksReducer;
