import React from 'react';
import { connect } from 'react-redux';
import Comments from './comments';


const mapStateToProps = (state) => ({
  errors: state.errors,
  tracks: state.tracks,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
