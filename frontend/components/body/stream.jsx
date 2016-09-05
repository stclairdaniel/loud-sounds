import React from 'react';
import { withRouter } from 'react-router';
import TrackContainer from '../track/track_container';
import Infinite from 'react-infinite';

class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.streamTracks = this.streamTracks.bind(this);
    this.streamHeader = this.streamHeader.bind(this);
    this.getContainerHeight = this.getContainerHeight.bind(this);
    this.yourTracksOnClick = this.yourTracksOnClick.bind(this);
    this.yourLikesOnClick = this.yourLikesOnClick.bind(this);
  }

  streamTracks () {
    return Object.keys(this.props.tracks).reverse().map( id => {
      return <TrackContainer key={id} id={id} track={this.props.tracks[id]} />;
    });
  }

  yourTracksOnClick () {
    this.props.router.push(`/${this.props.currentUser.username}`);
  }

  yourLikesOnClick () {
    this.props.router.push(`/${this.props.currentUser.username}/likes`);
  }

  streamHeader () {
    if (this.props.isUser && this.props.type === "user") {
      return (
        <div className="stream-header">
          <div>
            <h1 onClick={this.yourTracksOnClick}>Your tracks</h1>
          </div>
          <div>
            <h1 onClick={this.yourLikesOnClick}>Your likes</h1>
          </div>
        </div>
      );
    } else {
      return (
        <h1>Hot tracks</h1>
      );
    }
  }

  getContainerHeight () {
    //magic number - makes sure all elements fit in window.
    return $ (window).height() - 275;
  }

  render () {
    return (
      <div className="stream-container">
        {this.streamHeader()}
        <Infinite containerHeight={this.getContainerHeight()} elementHeight={278}>
          {this.streamTracks()}
        </Infinite>
      </div>
    );
  }
}

export default withRouter(Stream);
