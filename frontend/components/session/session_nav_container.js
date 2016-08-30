import React from 'react';
import { connect } from 'react-redux';
import SessionNav from './session_nav';
import { logout, signup, login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionNav);
