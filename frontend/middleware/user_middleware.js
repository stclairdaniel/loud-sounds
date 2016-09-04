//Actions
import { UserConstants, receiveUser} from '../actions/user_actions';
import { receiveErrors } from '../actions/error_actions';
//Util
import { requestUser } from '../util/user_api_util';

const UserMiddleware = ({getState, dispatch}) => next => action => {
  const handleErrors = errors => dispatch(receiveErrors(errors.responseJSON));
  switch(action.type) {
    case UserConstants.REQUEST_USER:
      const handleUser = user => dispatch(receiveUser(user));
      requestUser(handleUser, handleErrors, action.user);
      break;
    default:
      return next(action);
  }
};

export default UserMiddleware;
