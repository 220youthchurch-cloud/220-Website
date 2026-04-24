import React from 'react'
import FadeIn from "../common/FadeIn"
import consecratedVideo from '/events/consecrated_2025/consecrated.mp4';
import Video from '../common/Video';

function Hero() {
  return (
    <FadeIn className='relative w-full h-screen min-h-80 max-h-215 overflow-hidden'>
      <Video videoUrl={consecratedVideo}  />

      <div className='absolute inset-0 bg-black/40' />

      <div className='absolute inset-0 z-20 flex items-center'>
        <div className='mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 text-white'>
          <h1 className='header-font text-4xl md:text-6xl font-bold'>Welcome to 220 Youth</h1>
          <p className='body-font mt-4 text-base md:text-lg'>
            Growing together in faith, community, and purpose.
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

export default Hero