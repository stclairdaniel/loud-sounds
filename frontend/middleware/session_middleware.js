//Actions
import { SessionConstants, receiveCurrentUser, receiveErrors } from '../actions/session_actions';
//Util
import { signup, login, logout } from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const handleErrors = errors => dispatch(receiveErrors(errors.responseJSON));
  const handleLogin = user => dispatch(receiveCurrentUser(user));
  switch(action.type) {
    case SessionConstants.SIGNUP:
      signup(handleLogin, handleErrors, action.user);
      break;
    case SessionConstants.LOGIN:
      login(handleLogin, handleErrors, action.user);
      break;
    case SessionConstants.LOGOUT:
      const logoutSuccess = () => next(action);
      logout(logoutSuccess, handleErrors);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
