import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  loggedIn: (state.session.currentUser ? true : false),
  errors: state.session.errors,
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
