import React from 'react';
import StreamContainer from './stream_container';
import { withRouter } from 'react-router';

class UserStream extends React.Component  {
  constructor (props) {
    super(props);
  }

  render () {
    let id;
    if (this.props.currentUser) {
      id = this.props.currentUser.id;
    } else {
      id = null;
    }

    return (
      <div className="user-stream-container">
        <div className="user-stream-header">
          <div className="user-stream-header-img">
            <img src={this.props.user.header_image_url}></img>
          </div>
          <div className="user-stream-header-details">
            <h1>{this.props.user.username}</h1>
            <h2>{this.props.user.name}</h2>
            <h2>{this.props.user.hometown}</h2>
          </div>
        </div>
        <StreamContainer isUser={this.props.user.id === id} type="user" />
      </div>
    );
  }
}

export default withRouter(UserStream);
