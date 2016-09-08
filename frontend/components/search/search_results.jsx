import React from 'react';
import SessionNavContainer from '../session/session_nav_container';
import { withRouter } from 'react-router';
import Infinite from 'react-infinite';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }


  trackClickHandler (username, id) {
    this.props.router.push(`/${username}/tracks/${id}`);
    this.props.clearSearchResults();
  }

  usernameClickHandler (username) {
    this.props.router.push(`/${username}/`);
    this.props.clearSearchResults();
  }


  userResults () {
    let userResults = <div></div>;
    if (this.props.results.users.length > 0) {
      userResults = this.props.results.users.map( (user, idx) => {
        return (
          <div onClick={() => {this.usernameClickHandler(user.username)}} key={user + idx} className="result" >
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
          <div onClick={() => {this.trackClickHandler(track.user.username, track.id)}} key={track + idx} className="result">
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
    let artistsClass, tracksClass;
    if (this.props.results.users.length === 0) {
      artistsClass = "none";
    } else {
      artistsClass = "search-results-span";
    }
    if (this.props.results.tracks.length === 0) {
      tracksClass = "none";
    } else {
      tracksClass = "search-results-span";
    }
    if (this.props.results.users.length > 0 ||
        this.props.results.tracks.length > 0) {
          results = <Infinite containerHeight={200} elementHeight={35} className="search-results">
            <span className={artistsClass}>Artists</span>
            {this.userResults()}
            <span className={tracksClass}>Tracks</span>
            {this.trackResults()}
          </Infinite>;
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
