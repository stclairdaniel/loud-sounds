import React from 'react';
import SessionNavContainer from '../session/session_nav_container';
import { withRouter } from 'react-router';

class Header extends React.Component {

  render () {
    return (
      <header>
        <div className="nav-logo"
             onClick={() => {this.props.router.push('/');}}>
          <img src="http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_45/v1472833649/Site%20Icons/logo_09-05-17-541.png"/>
          <h1>Loud Sounds</h1>
        </div>
        <SessionNavContainer />
      </header>
    );
  }
}

export default withRouter(Header);
