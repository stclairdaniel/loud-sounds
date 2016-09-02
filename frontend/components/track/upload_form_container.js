import React from 'react';
import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.currentUser.id,
  username: state.session.currentUser.username,
  errors: state.errors,
  lastTrackId: Object.keys(state.tracks)[Object.keys(state.tracks).length - 1]
});

const mapDispatchToProps = dispatch => ({
  createTrack: (track) => dispatch(createTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
