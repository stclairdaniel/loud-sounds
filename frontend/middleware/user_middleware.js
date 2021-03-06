import { hashHistory } from 'react-router';
//Actions
import { UserConstants, receiveUser} from '../actions/user_actions';
import { receiveTracks } from '../actions/track_actions';
import { receiveErrors } from '../actions/error_actions';
import { receiveUserSearchResults } from '../actions/search_actions';
//Util
import { requestUser, requestLikedTracks, requestUsersLike } from '../util/user_api_util';

const UserMiddleware = ({getState, dispatch}) => next => action => {
  const handle404 = () => { hashHistory.push('/error');};
  switch(action.type) {
    case UserConstants.REQUEST_USER:
      const handleUser = user => dispatch(receiveUser(user));
      requestUser(handleUser, handle404, action.user);
      break;
    case UserConstants.REQUEST_LIKED_TRACKS:
      const handleTracks = tracks => dispatch(receiveTracks(tracks));
      requestLikedTracks(handleTracks, handle404, action.username);
      break;
    case UserConstants.REQUEST_USERS_LIKE:
      const handleSearch = users => dispatch(receiveUserSearchResults(users));
      requestUsersLike(handleSearch, null, action.username);
      break;
    default:
      return next(action);
  }
};

export default UserMiddleware;
