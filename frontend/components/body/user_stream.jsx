import React from 'react';
import TrackContainer from '../track/track_container';

const UserStream = (props) => (
  <div>
    {props.currentUser.username}'s tracks
    <TrackContainer />
  </div>
);

export default UserStream;
