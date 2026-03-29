import React from 'react'
import groupPictureUrl from '/220GroupPictureMarch.png';

function Hero() {
  return (
    <div>
      <img
        src={groupPictureUrl}
        alt='220 Group Picture'
        className='w-full'
      />
    </div>
  )
}

export default Hero