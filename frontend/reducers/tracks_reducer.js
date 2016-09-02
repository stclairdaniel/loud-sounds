import { TrackConstants } from '../actions/track_actions';
import merge from 'lodash/merge';

const TracksReducer = (state = {}, action) => {
  switch(action.type) {
    case TrackConstants.RECEIVE_TRACK:
      const track = action.track;
      return track;
    case TrackConstants.RECEIVE_TRACKS:
      const tracks = action.tracks;
      return tracks;
    default:
      return state;
  }
};

export default TracksReducer;
