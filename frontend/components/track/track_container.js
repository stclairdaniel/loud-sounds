import React from 'react';
import { connect } from 'react-redux';
import Track from './track';
import { playTrack } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  playTrack: (id) => dispatch(playTrack(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Track);
