import React from 'react';
import { Link } from 'react-router';

const SessionNav = (props) => {
  if (props.currentUser) {
    return (
      <div>
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="signup">Sign Up</Link>
        <Link to="login">Log In</Link>
      </div>
    );
  }
};

export default SessionNav;
