import React from 'react'
import consecratedVideo from '/events/consecrated_2025/consecrated.mp4';

const Video = ( {videoUrl = null} ) => {
  return (
    <div className='video-container'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='video-element'
      >
        <source src={video} type='video/mp4' />
      </video>
    </div>
  )
}

export default HeroVideo