import React from 'react';
import TrackContainer from '../track/track_container';
import Infinite from 'react-infinite';

const Stream = ({tracks, isUser}) => {
  const streamTracks = Object.keys(tracks).reverse().map( id => {
    return <TrackContainer key={id} id={id} track={tracks[id]} />;
  });

  const message = () => {
    if (isUser) {
      return <h1>Your tracks</h1>;
    } else {
      return <h1>Hot tracks</h1>;
    }
  };

  const getContainerHeight = () => {
    //magic number - makes sure all elements fit in window.
    return $ (window).height() - 275;
  };

  return (
    <div className="stream-container">
      {message()}
      <Infinite containerHeight={getContainerHeight()} elementHeight={240}>
        {streamTracks}
      </Infinite>
    </div>
  );
};

export default Stream;
