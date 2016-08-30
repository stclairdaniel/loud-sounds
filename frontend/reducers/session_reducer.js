import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (state = {currentUser: null, errors: []}, action) => {
  switch(action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.user});
    case SessionConstants.RECEIVE_ERRORS:
      return merge({}, state, {errors: [...state.errors, ...action.errors]});
    case SessionConstants.LOGOUT:
      return merge({}, state, {currentUser: null});
    default:
      return state;
  }
};

export default SessionReducer;
