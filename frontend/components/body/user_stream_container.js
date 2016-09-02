import React from 'react';
import { connect } from 'react-redux';
import UserStream from './user_stream';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserStream);
