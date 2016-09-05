import { TrackConstants } from '../actions/track_actions';
import merge from 'lodash/merge';

//get single track, merge with current tracks to include new comments

const TracksReducer = (state = {}, action) => {
  let newState = merge({}, state);
  switch(action.type) {
    case TrackConstants.RECEIVE_TRACK:
      return action.track;
    case TrackConstants.RECEIVE_TRACKS:
      return action.tracks;
    case TrackConstants.DELETE_TRACK:
      delete newState[action.trackId];
      return newState;
    case TrackConstants.CLEAR_TRACKS:
      return {};
    case TrackConstants.RECEIVE_TRACK_COMMENTS:
      console.log(action.comment.track);
      newState = merge({}, state);
      newState[action.comment.track.id].comments.push(action.comment);
      return newState;
    default:
      return state;
  }
};

export default TracksReducer;
