import React from 'react';
import TrackContainer from '../track/track_container';

const Stream = (props) => {
  //display latest 10 tracks
  const trackIds = Object.keys(props.tracks);
  const latestTenTrackIds = trackIds.slice(trackIds.length - 10).reverse();
  const tracks = latestTenTrackIds.map( id => {
    return <TrackContainer key={id} id={id} track={props.tracks[id]} />;
  });

  return (
    <div className="stream-container">
      <h1>Hot tracks</h1>
      <div className="tracks-container" >
        {tracks}
      </div>
    </div>
  );
};

export default Stream;
