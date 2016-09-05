import React from 'react';
import { connect } from 'react-redux';
import TrackDetail from './track_detail';
import { requestTrack } from '../../actions/track_actions.js';

const mapStateToProps = (state) => ({
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  requestTrack: (trackId) => dispatch(requestTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail);
