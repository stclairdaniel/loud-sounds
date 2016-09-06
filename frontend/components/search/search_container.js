import React from 'react';
import { connect } from 'react-redux';
import Search from './search';
import { requestUsersLike } from '../../actions/user_actions';
import { clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  requestUsersLike: (username) => dispatch(requestUsersLike(username)),
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
