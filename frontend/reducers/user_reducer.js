import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  switch(action.type) {
    case UserConstants.RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default UserReducer;
