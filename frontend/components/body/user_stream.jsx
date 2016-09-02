import React from 'react';
import StreamContainer from './stream_container';

class UserStream extends React.Component  {
  constructor (props) {
    super(props);
  }

  render () {
    if (Object.keys(this.props.tracks).length === 0) {
      return <div></div>;
    } else {
      //this is hacky, but it gets the user from the list of tracks
      const user = this.props.tracks[Object.keys(this.props.tracks)[0]].user;
      return (
        <div className="user-stream-container">
          <div className="user-stream-header">
            <div className="user-stream-header-img">
              <img src={user.header_image_url}></img>
            </div>
            <div className="user-stream-header-details">
              <h1>{user.username}</h1>
              <h2>{user.name}</h2>
              <h2>{user.hometown}</h2>
            </div>
          </div>
          <StreamContainer user={user.id === this.props.currentUser.id} />
        </div>
      );
    }
  }
}

export default UserStream;
