import React from 'react';
import SessionNavContainer from '../session/session_nav_container';
import { withRouter } from 'react-router';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let results, className;
    if (this.props.results.users.length > 0) {
      results = this.props.results.users.map( (user, idx) => {
        return (
          <div key={user + idx} className="result">
            <img src={user.header_image_url}></img>
            <li>{user.username}</li>
          </div>
          );
      });
      className = "search-results";
    } else {
      results = <div></div>;
      className = "hidden";
    }
    return (
    <div className={className}>
      {results}
    </div>
    );
  }
}

export default withRouter(SearchResults);
