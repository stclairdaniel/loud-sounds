import React from 'react';
import { withRouter } from 'react-router';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.trackUsername = this.trackUsername.bind(this);
    this.userClickHandler = this.userClickHandler.bind(this);
    this.deleteClickHandler = this.deleteClickHandler.bind(this);
    this.editClickHandler = this.editClickHandler.bind(this);
    this.showIcon = this.showIcon.bind(this);
  }

  play () {
    this.props.playTrack(this.props.track);
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
    this.props.deleteTrack(this.props.track.id);
  }

  editClickHandler () {

  }

  showIcon () {
    if (this.trackUsername() === "You") {
      return "show-icon";
    } else {
      return "hide-icon";
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
              <img src="http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_50/v1472833653/Site%20Icons/play.jpg" onClick={this.play} className="play-button"></img>
              <div className='track-body-info-details-artist-details'>
                {this.props.track.title}
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
