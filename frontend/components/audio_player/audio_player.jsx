import React from 'react';
import { withRouter } from 'react-router';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.playTrack = this.playTrack.bind(this);
    this.trackClickHandler = this.trackClickHandler.bind(this);
    this.usernameClickHandler = this.usernameClickHandler.bind(this);
  }

   playTrack () {
    if (window.as) {
      if (this.props.track && this.props.track.audio_file_url !== window.as[0].mp3 ) {
        window.as[0].load(this.props.track.audio_file_url);
        window.as[0].play();
      }
    }
  }

  trackClickHandler (username, id) {
    this.props.router.push(`/${username}/tracks/${id}`);
  }

  usernameClickHandler (username) {
    this.props.router.push(`/${username}/`);
  }

  nowPlaying () {
    if (window.as) {
      if (this.props.track) {
        return (<span className="now-playing">Now playing:
          <span className="np-link" onClick={() => {this.trackClickHandler(this.props.track.user.username, this.props.track.id)}}>
            {this.props.track.title}
          </span>
          <span>by</span>
          <span className="np-link" onClick={() => {this.usernameClickHandler(this.props.track.user.username)}}>
              {this.props.track.user.username}
          </span>
        </span>
      );
      }
    }
  }



  render() {
    this.playTrack();
    return (
      <div className="audio-player-container">
        <div><audio preload="none" /></div>
        {this.nowPlaying()}
      </div>
    );
  }

}

export default withRouter(AudioPlayer);
