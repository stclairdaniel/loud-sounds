import React from 'react';
import TrackContainer from '../track/track_container';
import StreamContainer from './stream_container';

const UserStream = (props) => {
  return (
    <div className="user-stream-container">
      <div className="user-stream-header">
        <div className="user-stream-header-img">
          <img src={props.currentUser.header_image_url}></img>
        </div>
        <div className="user-stream-header-details">
          <h1>{props.currentUser.username}</h1>
          <h2>{props.currentUser.name}</h2>
          <h2>{props.currentUser.hometown}</h2>
        </div>
      </div>
      <StreamContainer />
    </div>
  );
};

export default UserStream;
