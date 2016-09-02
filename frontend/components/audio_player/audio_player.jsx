import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.playTrack = this.playTrack.bind(this);
  }

  playTrack () {
    if (this.props.track) {
      window.as[0].load(this.props.track.audio_file_url);
      window.as[0].play();
    }
  }

  render() {
    this.playTrack();
    return (
      <div className="audio-player-container">
        <div><audio preload="none" /></div>
      </div>
    );
  }

}

export default AudioPlayer;
