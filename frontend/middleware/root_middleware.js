import { applyMiddleware } from 'redux';
//Middleware
import SessionMiddleware from './session_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware
);

export default RootMiddleware;
