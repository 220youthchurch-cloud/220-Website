import React from 'react'
import groupPictureUrl from '/220GroupPictureMarch.png';

function Hero() {
  return (
    <section className='relative w-full h-screen min-h-80 max-h-170 overflow-hidden'>
      <img
        src={groupPictureUrl}
        alt='220 Youth Group'
        className='absolute inset-0 w-full h-full object-cover object-center'
      />

      <div className='absolute inset-0 bg-black/40' />

      <div className='relative z-10 h-full flex items-center'>
        <div className='container-custom text-white'>
          <h1 className='text-4xl md:text-6xl font-bold'>Welcome to 220 Youth</h1>
          <p className='mt-4 max-w-xl text-base md:text-lg'>
            Growing together in faith, community, and purpose.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero