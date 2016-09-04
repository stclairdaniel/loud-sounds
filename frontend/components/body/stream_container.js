import React from 'react';
import { connect } from 'react-redux';
import Stream from './stream';

const mapStateToProps = (state, ownProps) => ({
  tracks: state.tracks,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
