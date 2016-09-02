import React from 'react';
import TrackContainer from '../track/track_container';

const Stream = ({tracks, user}) => {
  const streamTracks = Object.keys(tracks).reverse().map( id => {
    return <TrackContainer key={id} id={id} track={tracks[id]} />;
  });

  const message = () => {
    if (user) {
      return <h1>Your tracks</h1>;
    } else {
      return <h1>Hot tracks</h1>;
    }
  };

  return (
    <div className="stream-container">
      {message()}
      <div className="tracks-container" >
        {streamTracks}
      </div>
    </div>
  );
};

export default Stream;
