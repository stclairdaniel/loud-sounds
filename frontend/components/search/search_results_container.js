import React from 'react';
import { connect } from 'react-redux';
import SearchResults from './search_results';

const mapStateToProps = (state) => ({
  results: state.search
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
