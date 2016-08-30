import React from 'react';
import SessionNavContainer from '../session/session_nav_container';

const Header = () => (
  <header className="navbar">
    <div className='nav-logo'>LOGO</div>
    <h1 className="nav-h1">Loud Sounds</h1>
    <SessionNavContainer />
  </header>
);

export default Header;
