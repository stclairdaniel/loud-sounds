export const SearchConstants = {
  RECEIVE_USER_SEARCH_RESULTS: "RECEIVE_USER_SEARCH_RESULTS",
  RECEIVE_TRACK_SEARCH_RESULTS: "RECEIVE_TRACK_SEARCH_RESULTS",
  CLEAR_SEARCH_RESULTS: "CLEAR_SEARCH_RESULTS"
};

export const receiveUserSearchResults = (results) => ({
  type: SearchConstants.RECEIVE_USER_SEARCH_RESULTS,
  results
});

export const receiveTrackSearchResults = (results) => ({
  type: SearchConstants.RECEIVE_TRACK_SEARCH_RESULTS,
  results
});

export const clearSearchResults = () => ({
  type: SearchConstants.CLEAR_SEARCH_RESULTS
});
