import { combineReducers } from 'redux';
//Reducers
import SessionReducer from './session_reducer';
import TracksReducer from './tracks_reducer';
import ErrorsReducer from './errors_reducer';
import NowPlayingReducer from './now_playing_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  tracks: TracksReducer,
  errors: ErrorsReducer,
  nowPlaying: NowPlayingReducer,
  user: UserReducer,
  search: SearchReducer
});

export default RootReducer;
