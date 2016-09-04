import React from 'react';
import { withRouter } from 'react-router';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.playPause = this.playPause.bind(this);
    this.trackUsername = this.trackUsername.bind(this);
    this.userClickHandler = this.userClickHandler.bind(this);
    this.deleteClickHandler = this.deleteClickHandler.bind(this);
    this.editClickHandler = this.editClickHandler.bind(this);
    this.showIcon = this.showIcon.bind(this);
    this.playPauseIcon = this.playPauseIcon.bind(this);
  }

  playPause () {
    if (window.as[0].mp3 !== this.props.track.audio_file_url) {
      this.props.playTrack(this.props.track);
    } else if (!window.as[0].playing) {
      window.as[0].play();
    } else {
      window.as[0].pause();
    }
  }

  trackUsername ()  {
    if (this.props.currentUser && this.props.currentUser.username === this.props.track.user.username) {
      return "You";
    } else {
      return this.props.track.user.username;
    }
  }

  userClickHandler () {
    if (this.trackUsername() === "You") {
      this.props.router.push(this.props.currentUser.username);
    } else {
      let username = this.props.track.user.username;
      if (username.includes(" ")) {
        username = username.replace(/ /, "%20");
      }
      this.props.router.push(username);
    }
  }

  deleteClickHandler () {
    if (window.confirm("Are you sure you want to delete this track?")) {
      this.props.deleteTrack(this.props.track.id);
    }
  }

  editClickHandler () {
    this.props.router.push(`/${this.props.track.user.username}/${this.props.track.id}/edit`);
  }

  showIcon () {
    if (this.trackUsername() === "You") {
      return "show-icon";
    } else {
      return "hide-icon";
    }
  }

  playPauseIcon () {
    if (window.as[0].playing && this.props.nowPlaying.id === this.props.track.id) {
      return "http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_40/v1472949332/player-pause-icon-11193_guwsko.png"
    } else {
      return "http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_50/v1472833653/Site%20Icons/play.jpg"
    }
  }

  render () {
    return (
      <div className='track-container'>
        <div className='track-header'>
          <img src={this.props.track.user.header_image_url} width="50" height="50" onClick={this.userClickHandler}></img>
          <span className="header-artist" onClick={this.userClickHandler}>{this.trackUsername()}</span>
          <span className="header-detail">posted a track</span>
        </div>
        <div className='track-body'>
          <div className='track-body-image'>
            <img src={this.props.track.image_url} width="150" height="150"/>
          </div>
          <div className='track-body-info'>
            <div className='track-body-info-details'>
              <div>
                <img src={this.playPauseIcon()} onClick={this.playPause} className="play-button"></img>
              </div>
              <div className='track-body-info-details-artist-details'>
                <span>{this.props.track.title}</span>
                <span className="genre">{this.props.track.genre}</span>
              </div>
            </div>
            <div className='track-body-info-comment'>
              <span>Eventually I'll be a comment component!</span>
            </div>
            <div className='track-body-info-icons'>
              <img src="http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_25/v1472928235/trash-512_tzepba.png" className={this.showIcon()} onClick={this.deleteClickHandler}></img>
              <img src="http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_25/v1472928619/pencil-512_ddms2g.png" className={this.showIcon()} onClick={this.editClickHandler}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Track);
