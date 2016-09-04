import React from 'react';
import { connect } from 'react-redux';
import UserStream from './user_stream';
import { requestUserTracks} from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  tracks: state.tracks,
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  requestUserTracks: (username) => dispatch(requestUserTracks(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserStream);
