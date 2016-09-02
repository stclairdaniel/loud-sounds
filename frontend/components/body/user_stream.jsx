import React from 'react';
import TrackContainer from '../track/track_container';
import StreamContainer from './stream_container';

const UserStream = (props) => {

  const trackIds = Object.keys(props.tracks);
  const latestTenTrackIds = trackIds.slice(trackIds.length - 10).reverse();
  const tracks = latestTenTrackIds.map( id => {
    return <TrackContainer key={id} id={id} track={props.tracks[id]} />;
  });

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
      <div className="tracks-container">
        {tracks}
      </div>
    </div>
  );
};

export default UserStream;
