import React from 'react';
import { Link } from 'react-router';

const SessionNav = (props) => {

  if (props.currentUser) {
    const handleClick = (e) => {
      props.logout();
    };

    return (
      <div className="nav-links">
        <div className="nav-link">{props.currentUser.username}</div>
        <Link to="/" onClick={handleClick} className="nav-link">Log Out</Link>
      </div>
    );
  } else {
    return (
      <div className="nav-links">
        <Link to="signup" className="nav-link">Sign Up</Link>
        <Link to="login" className="nav-link">Log In</Link>
      </div>
    );
  }
};

export default SessionNav;
