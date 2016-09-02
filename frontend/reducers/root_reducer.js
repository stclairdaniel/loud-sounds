import { combineReducers } from 'redux';
//Reducers
import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import ErrorsReducer from './errors_reducer';
import NowPlayingReducer from './now_playing_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  tracks: TracksReducer,
  errors: ErrorsReducer,
  nowPlaying: NowPlayingReducer
});

export default RootReducer;
