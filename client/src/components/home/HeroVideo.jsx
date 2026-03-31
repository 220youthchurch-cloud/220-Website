import React from 'react'
import consecratedVideo from '/events/consecrated_2025/consecrated.mp4';

const HeroVideo = () => {
  return (
    <div className='video-container'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='video-element'
      >
        <source src={consecratedVideo} type='video/mp4' />
      </video>
    </div>
  )
}

export default HeroVideo