import React from 'react';
import TrackContainer from '../track/track_container';

const UserStream = (props) => {

  const trackIds = Object.keys(props.tracks);
  const latestTenTrackIds = trackIds.slice(trackIds.length - 10).reverse();
  const tracks = latestTenTrackIds.map( id => {
    return <TrackContainer key={id} id={id} track={props.tracks[id]} />;
  });

  return (
    <div>
      {props.currentUser.username}s tracks
      {tracks}
    </div>
  );
};

export default UserStream;
