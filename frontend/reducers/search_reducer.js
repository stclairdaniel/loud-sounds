import { SearchConstants } from '../actions/search_actions';
import merge from 'lodash/merge';

const SearchReducer = (state = {users: [], tracks: []}, action) => {
  switch(action.type) {
    case SearchConstants.RECEIVE_USER_SEARCH_RESULTS:
      return merge({}, state, {users: action.results});
    case SearchConstants.RECEIVE_TRACK_SEARCH_RESULTS:
      return merge({}, state, {tracks: action.results});
    case SearchConstants.CLEAR_SEARCH_RESULTS:
      return {users: [], tracks: []};
    default:
      return state;
  }
};

export default SearchReducer;
