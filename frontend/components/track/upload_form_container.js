import React from 'react';
import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  //check this
  user_id: ownProps.location.pathname,
  errors: state.track.errors
});

const mapDispatchToProps = dispatch => ({
  createTrack: (track) => dispatch(createTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
