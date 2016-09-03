import React from 'react';
import StreamContainer from './stream_container';

class UserStream extends React.Component  {
  constructor (props) {
    super(props);
  }

  //prevents problems on refreshing
  componentDidMount () {
    if (Object.keys(this.props.tracks).length === 0) {
      const match = window.location.hash.match(/[^#\/"][a-zA-Z0-9-_%]*/);
      const username = match[0].replace(/%20/, " ");
      this.props.requestUserTracks(username);
    }
  }

  render () {
    if (Object.keys(this.props.tracks).length === 0) {
      return <div></div>;
    } else {
      const user = this.props.tracks[Object.keys(this.props.tracks)[0]].user;
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
              <img src={user.header_image_url}></img>
            </div>
            <div className="user-stream-header-details">
              <h1>{user.username}</h1>
              <h2>{user.name}</h2>
              <h2>{user.hometown}</h2>
            </div>
          </div>
          <StreamContainer user={user.id === id} />
        </div>
      );
    }
  }
}

export default UserStream;
