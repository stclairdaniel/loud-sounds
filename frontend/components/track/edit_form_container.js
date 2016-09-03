import React from 'react';
import { connect } from 'react-redux';
import EditForm from './edit_form';
import { editTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.currentUser.id,
  username: state.session.currentUser.username,
  errors: state.errors,
  tracks: state.tracks,
});

const mapDispatchToProps = dispatch => ({
  editTrack: (track) => dispatch(editTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
