//Actions
import { LikeConstants } from '../actions/like_actions';
//Util
import { createLike, deleteLike } from '../util/like_api_util';
import { hashHistory } from 'react-router';

const LikeMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case LikeConstants.CREATE_LIKE:
      createLike(null, null, action.like);
      break;
    case LikeConstants.DELETE_LIKE:
      deleteLike(null, null, action.like.id);
      break;
    default:
      return next(action);
  }
};

export default LikeMiddleware;
