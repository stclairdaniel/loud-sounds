import React from 'react';
import { withRouter } from 'react-router';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.trackUsername = this.trackUsername.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
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

  clickHandler () {
    if (this.trackUsername() === "You") {
      this.props.router.push(this.props.currentUser.username);
    }
  }

  render () {
    return (
      <div className='track-container'>
        <div className='track-header'>
          <img src={this.props.track.user.header_image_url} width="50" height="50"></img>
          <span className="header-artist">{this.trackUsername()}</span>
          <span className="header-detail">posted a track</span>
        </div>
        <div className='track-body'>
          <div className='track-body-image'>
            <img src={this.props.track.image_url} width="100" height="100"/>
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
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Track);
