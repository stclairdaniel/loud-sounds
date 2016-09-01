import React from 'react';

const Track = ({track, id}) => {
  return(
  <div className='track-container'>
    <div className='track-header'>
      <span>I'm the header</span>
    </div>
    <div className='track-body'>
      <div className='track-body-image'>
        <img src={track.image_url}/>
      </div>
      <div className='track-body-info'>
        <div className='track-body-info-details'>
          <div className='track-body-info-details-artist-image'>
            <img src="http://res.cloudinary.com/loudsounds/image/upload/c_scale,h_45,w_45/v1472745798/logo_yorfu3.png"/>
          </div>
          <div className='track-body-info-details-artist-details'>
            <span>{track.title}</span>
          </div>
        </div>
        <div className='track-body-info-comments'>
          <span>Eventually I'll be a comment component!</span>
        </div>
      </div>
    </div>
  </div>
);
};

export default Track;
