import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (state = {currentUser: null}, action) => {
  switch(action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, {currentUser: action.user});
    case SessionConstants.LOGOUT:
      return merge({}, {currentUser: null});
    default:
      return state;
  }
};

export default SessionReducer;
