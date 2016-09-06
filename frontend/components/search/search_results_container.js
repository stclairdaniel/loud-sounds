import React from 'react';
import { connect } from 'react-redux';
import SearchResults from './search_results';
import { clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  results: state.search
});

const mapDispatchToProps = dispatch => ({
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
