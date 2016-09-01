import React from 'react';
import TrackContainer from '../track/track_container';

const UserStream = (props) => {

  const trackIds = Object.keys(props.tracks);
  const latestTenTrackIds = trackIds.slice(trackIds.length - 10).reverse();
  const tracks = latestTenTrackIds.map( id => {
    return <TrackContainer key={id} id={id} track={props.tracks[id]} />;
  });

  return (
    <div className="user-stream-container">
      <div className="user-stream-header">
        <img src={props.currentUser.header_image_url}/>
        <h1>{props.currentUser.username}</h1>
        <h2>{props.currentUser.name}</h2>
        <h2>{props.currentUser.hometown}</h2>
      </div>
      <div className="tracks-container">
        {tracks}
      </div>
    </div>
  );
};

export default UserStream;
