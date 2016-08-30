import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (state = {currentUser: null, errors: []}, action) => {
  switch(action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, {currentUser: action.user, errors: []});
    case SessionConstants.RECEIVE_ERRORS:
      return merge({}, {currentUser: null, errors: [...action.errors]});
    case SessionConstants.LOGOUT:
      return merge({}, {currentUser: null, errors: []});
    default:
      return state;
  }
};

export default SessionReducer;
