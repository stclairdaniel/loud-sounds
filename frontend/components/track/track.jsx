import React from 'react';

const Track = ({track, id}) => {
  return(
  <div className='track-container'>
    <div className='track-header'>
      <img src={track.user.header_image_url} width="50" height="50"></img>
      <span className="header-detail">{track.user.username} posted a track</span>
    </div>
    <div className='track-body'>
      <div className='track-body-image'>
        <img src={track.image_url} width="100" height="100"/>
      </div>
      <div className='track-body-info'>
        <div className='track-body-info-details'>
          <img src="http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_50/v1472776743/play_pluyju.jpg"></img>
          <div className='track-body-info-details-artist-details'>
            {track.title}
          </div>
        </div>
        <div className='track-body-info-comment'>
          <span>Eventually I'll be a comment component!</span>
        </div>
      </div>
    </div>
  </div>
);
};
export default Track;
