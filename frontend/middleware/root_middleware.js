import { applyMiddleware } from 'redux';
//Middleware
import SessionMiddleware from './session_middleware';
import TrackMiddleware from './track_middleware';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TrackMiddleware,
  loggerMiddleware
);

export default RootMiddleware;
