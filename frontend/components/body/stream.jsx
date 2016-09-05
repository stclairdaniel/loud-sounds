import React from 'react';
import TrackContainer from '../track/track_container';
import Infinite from 'react-infinite';

const Stream = ({tracks, isUser, type}) => {
  const streamTracks = Object.keys(tracks).reverse().map( id => {
    return <TrackContainer key={id} id={id} track={tracks[id]} />;
  });

  const streamHeader = () => {
    if (isUser && type === "user") {
      return (
        <div className="stream-header">
          <div>
            <h1>Your tracks</h1>
          </div>
          <div>
            <h1>Your likes</h1>
          </div>
        </div>
      );
    } else {
      return (
        <h1>Hot tracks</h1>
      );
    }
  };

  const getContainerHeight = () => {
    //magic number - makes sure all elements fit in window.
    return $ (window).height() - 275;
  };

  return (
    <div className="stream-container">
      {streamHeader()}
      <Infinite containerHeight={getContainerHeight()} elementHeight={278}>
        {streamTracks}
      </Infinite>
    </div>
  );
};

export default Stream;
