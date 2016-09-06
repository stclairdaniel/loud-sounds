import React from 'react';
import SessionNavContainer from '../session/session_nav_container';
import { withRouter } from 'react-router';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  userResults () {
    let userResults = <div></div>;
    if (this.props.results.users.length > 0) {
      userResults = this.props.results.users.map( (user, idx) => {
        return (
          <div key={user + idx} className="result">
            <img src={user.header_image_url}></img>
            <li>{user.username}</li>
          </div>
        );
      });
    }
    return userResults;
  }

  trackResults () {
    let trackResults = <div></div>;
    if (this.props.results.tracks.length > 0) {
      trackResults = this.props.results.tracks.map( (track, idx) => {
        return (
          <div key={track + idx} className="result">
            <img src={track.image_url}></img>
            <li>{track.title}</li>
          </div>
        );
      });
    }
    return trackResults;
  }

  render () {
    let results;
    if (this.props.results.users.length > 0 ||
        this.props.results.tracks.length > 0) {
          results = <div className="search-results">
            {this.userResults()}
            {this.trackResults()}
          </div>;
    } else {
      results = <div className="hidden"></div>;
    }
    return (
      <div>
        {results}
      </div>
    );
  }
}

export default withRouter(SearchResults);
