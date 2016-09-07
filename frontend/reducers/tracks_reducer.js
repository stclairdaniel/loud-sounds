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
      newState[action.comment.track.id].comments.push(action.comment);
      return newState;
    case TrackConstants.RECEIVE_TRACK_LIKE:
      newState[action.like.track.id].likes.push(action.like.user.id);
      //strange hack to a strange bug - comments were getting
      //reversed by lodash merge
      newState[action.like.track.id].comments = newState[action.like.track.id].comments.reverse();
      return newState;
    case TrackConstants.DELETE_TRACK_LIKE:
      const idx = newState[action.like.track.id].likes.indexOf(action.like.user.id);
      newState[action.like.track.id].likes.splice(idx, 1);
      newState[action.like.track.id].comments = newState[action.like.track.id].comments.reverse();
      return newState;
    default:
      return state;
  }
};

export default TracksReducer;
