import React from 'react';
import SessionNavContainer from '../session/session_nav_container';
import { withRouter } from 'react-router';

class Header extends React.Component {

  render () {
  return (
  <header className="navbar">
    <div className="nav-logo" onClick={() => {this.props.router.push('/');}}>
      <img className="nav-img" src="assets/logo.png"/>
      <h1 className="nav-h1">Loud Sounds</h1>
    </div>
    <SessionNavContainer />
  </header>
    );
  }
}

export default withRouter(Header);
