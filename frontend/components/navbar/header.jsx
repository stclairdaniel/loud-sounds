import React from 'react';
import SessionNavContainer from '../session/session_nav_container';
import { withRouter } from 'react-router';

class Header extends React.Component {

  render () {
  return (
  <header className="navbar">
    <div className="nav-logo" onClick={() => {this.props.router.push('/');}}>
      <img className="nav-img" src="http://res.cloudinary.com/loudsounds/image/upload/c_scale,h_45,w_45/v1472745798/logo_yorfu3.png"/>
      <h1 className="nav-h1">Loud Sounds</h1>
    </div>
    <SessionNavContainer />
  </header>
    );
  }
}

export default withRouter(Header);
