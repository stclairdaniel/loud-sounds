import React from 'react';

const Track = (props) => {
  return(
  <div className='track-container'>
    <div className='track-header'></div>
    <div className='track-details'>

    </div>
    <div>I'm track number {props.id}</div>
    <div>My title is {props.track.title}</div>
  </div>
);
};

export default Track;
