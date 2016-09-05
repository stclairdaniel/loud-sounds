import React from 'react';
import { connect } from 'react-redux';
import Comment from './comment';
import { deleteComment } from '../../actions/comment_actions';
import { requestTrack } from '../../actions/track_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  requestTrack: (trackId) => dispatch(requestTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
