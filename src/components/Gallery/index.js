import React from 'react';

import frame from '../../assets/images/frame.png';



const Gallery = () => {
  return (
    <div>
      <h5>Gallery</h5>
      <img src={frame}  style={{width: '800px', height: '800px'}}alt='frame' />
      <iframe src="https://www.instagram.com/reel/Cmr0q1LBAuh/?utm_source=ig_embed&amp;utm_campaign=loading" title='title' />

    </div>
  );
};

export default Gallery;

