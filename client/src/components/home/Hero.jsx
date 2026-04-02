import React from 'react'
import HeroVideo from './HeroVideo';

function Hero() {
  return (
    <section className='relative w-full h-screen min-h-80 max-h-190 overflow-hidden'>
      <HeroVideo />

      <div className='absolute inset-0 bg-black/40' />

      <div className='absolute inset-0 z-20 flex items-center'>
        <div className='mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 text-white'>
          <h1 className='header-font text-4xl md:text-6xl font-bold'>Welcome to 220 Youth</h1>
          <p className='body-font mt-4 text-base md:text-lg'>
            Growing together in faith, community, and purpose.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero