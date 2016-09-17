import { applyMiddleware } from 'redux';
//Middleware
import SessionMiddleware from './session_middleware';
import TrackMiddleware from './track_middleware';
import UserMiddleware from './user_middleware';
import CommentMiddleware from './comment_middleware';
import LikeMiddleware from './like_middleware';
import createLogger from 'redux-logger';

const LoggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TrackMiddleware,
  UserMiddleware,
  CommentMiddleware,
  LikeMiddleware,
  LoggerMiddleware
);

export default RootMiddleware;
