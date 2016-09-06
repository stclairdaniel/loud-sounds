import React from 'react';
import SessionNavContainer from '../session/session_nav_container';
import { withRouter } from 'react-router';

class Search extends React.Component {

  render () {
    return (
    <div className="search">
      <img src="http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_25/v1473181301/search-icon-png-14_sjmxpp.png"></img>
      <input placeholder="Artist or track"></input>
    </div>
    );
  }
}

export default withRouter(Search);
