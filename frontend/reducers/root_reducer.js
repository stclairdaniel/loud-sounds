import { combineReducers } from 'redux';
//Reducers
import SessionReducer from './session_reducer';
import TrackReducer from './track_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  track: TrackReducer,
  errors: ErrorReducer
});

export default RootReducer;
