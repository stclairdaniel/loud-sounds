import React from 'react';
import SessionNavContainer from '../session/session_nav_container';

const Header = () => (
  <header className="navbar">
    <div className="nav-logo">
      <img className="nav-img" src="assets/logo.png"/>
      <h1 className="nav-h1">Loud Sounds</h1>
    </div>
    <SessionNavContainer />
  </header>
);

export default Header;
