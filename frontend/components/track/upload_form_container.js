import React from 'react';
import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  user_id: state.session.currentUser.id,
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  createTrack: (track) => dispatch(createTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
