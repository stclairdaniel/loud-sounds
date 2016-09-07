import React from 'react';
import { Link } from 'react-router';
import { login } from '../../actions/session_actions';

const SessionNav = (props) => {
  if (props.currentUser) {

    const handleClick = (e) => {
      props.logout();
    };

    const userLink = props.currentUser.username;

    return (
      <div className="nav-links">
        <Link to="upload" className="nav-link">Upload</Link>
        <Link to={userLink}
              className="nav-link">{props.currentUser.username}</Link>
        <Link to="/" onClick={handleClick} className="nav-link">Log Out</Link>
      </div>
    );
  } else {

    const guestLogin = (e) => {
      e.preventDefault();
      const user = {username: "Guest", password: "password"};
      props.login(user);
    };

    return (
      <div className="nav-links">
        <Link to="login" className="nav-link">Login</Link> or
        <Link to="signup" className="nav-link">Join</Link>
        <button onClick={guestLogin}>Guest</button>
      </div>
      );
  }
};

export default SessionNav;
