import { TrackConstants } from '../actions/track_actions';

const NowPlayingReducer = (state = null, action) => {
  switch(action.type) {
    case TrackConstants.PLAY_TRACK:
      return action.track;
    default:
      return state;
  }
};

export default NowPlayingReducer;
