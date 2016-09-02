import React from 'react';
import TrackContainer from '../track/track_container';

const Stream = ({tracks}) => {
  //display latest 10 tracks
  const trackIds = Object.keys(tracks);
  const latestTenTrackIds = trackIds.slice(trackIds.length - 10).reverse();
  const hotTracks = latestTenTrackIds.map( id => {
    return <TrackContainer key={id} id={id} track={tracks[id]} />;
  });

  return (
    <div className="stream-container">
      <h1>Hot tracks</h1>
      <div className="tracks-container" >
        {hotTracks}
      </div>
    </div>
  );
};

export default Stream;
