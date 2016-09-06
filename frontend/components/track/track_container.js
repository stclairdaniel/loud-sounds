import React from 'react';
import { connect } from 'react-redux';
import Track from './track';
import { playTrack, deleteTrack, editTrack } from '../../actions/track_actions';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  nowPlaying: state.nowPlaying,
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  playTrack: (id) => dispatch(playTrack(id)),
  deleteTrack: (id) => dispatch(deleteTrack(id)),
  createLike: (like) => dispatch(createLike(like)),
  deleteLike: (like) => dispatch(deleteLike(like))
});

export default connect(mapStateToProps, mapDispatchToProps)(Track);
