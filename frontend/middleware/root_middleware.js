import { applyMiddleware } from 'redux';
//Middleware
import SessionMiddleware from './session_middleware';
import TrackMiddleware from './track_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  TrackMiddleware
);

export default RootMiddleware;
