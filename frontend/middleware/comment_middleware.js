//Actions
import { CommentConstants } from '../actions/comment_actions';
import { receiveErrors } from '../actions/error_actions';
import { receiveTrackComments } from '../actions/track_actions.js';
//Util
import { createComment, deleteComment } from '../util/comment_api_util';
import { hashHistory } from 'react-router';

const TrackMiddleware = ({getState, dispatch}) => next => action => {
  const handleErrors = errors => dispatch(receiveErrors(errors.responseJSON));
  const handleTrackComments = comment => dispatch(receiveTrackComments(comment));
  switch(action.type) {
    case CommentConstants.CREATE_COMMENT:
      createComment(handleTrackComments, handleErrors, action.comment);
      break;
    case CommentConstants.DELETE_COMMENT:
      deleteComment(null, handleErrors, action.commentId);
      break;
    default:
      return next(action);
  }
};

export default TrackMiddleware;
