export const SearchConstants = {
  RECEIVE_SEARCH_RESULTS: "RECEIVE_SEARCH_RESULTS",
  CLEAR_SEARCH_RESULTS: "CLEAR_SEARCH_RESULTS"
};

export const receiveSearchResults = (results) => ({
  type: SearchConstants.RECEIVE_SEARCH_RESULTS,
  results
});

export const clearSearchResults = () => ({
  type: SearchConstants.CLEAR_SEARCH_RESULTS
});
