//Actions
import { LikeConstants } from '../actions/like_actions';
import { receiveTrackLike, deleteTrackLike } from '../actions/track_actions';

//Util
import { createLike, deleteLike } from '../util/like_api_util';
import { hashHistory } from 'react-router';

const LikeMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case LikeConstants.CREATE_LIKE:
      const handleLike = (like) => dispatch(receiveTrackLike(like));
      createLike(handleLike, null, action.like);
      break;
    case LikeConstants.DELETE_LIKE:
      const handleDelete = (like) => dispatch(deleteTrackLike(like));
      deleteLike(handleDelete, null, action.like);
      break;
    default:
      return next(action);
  }
};

export default LikeMiddleware;
