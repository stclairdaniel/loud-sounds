import React from 'react';
import StreamContainer from './stream_container';

class UserStream extends React.Component  {
  constructor (props) {
    super(props);
  }
  //check if current user matches url, render header no matter what

  // const match = window.location.hash.match(/[^#\/"][a-zA-Z0-9-_%]*/);
  // const username = match[0].replace(/%20/, " ");
  render () {
    return (
      <div className="user-stream-container">
        <div className="user-stream-header">
          <div className="user-stream-header-img">
            <img src={this.props.currentUser.header_image_url}></img>
          </div>
          <div className="user-stream-header-details">
            <h1>{this.props.currentUser.username}</h1>
            <h2>{this.props.currentUser.name}</h2>
            <h2>{this.props.currentUser.hometown}</h2>
          </div>
        </div>
        <StreamContainer user={true} />
      </div>
    );
  }
}

export default UserStream;
