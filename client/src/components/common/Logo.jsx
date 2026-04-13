import React from 'react'
import { Link } from 'react-router-dom';

import logo from '/220_logo.png';

const Logo = ({ isLarge = false, isOnDarkBackground = false }) => {
  const imageClassName = isLarge
    ? 'w-20 h-20 md:w-24 md:h-24'
    : 'w-16 h-16'

  const titleClassName = `${isLarge ? 'text-3xl md:text-5xl' : 'text-2xl md:text-4xl'} font-heading font-bold`

  const subtitleClassName = `${isLarge ? 'text-xl md:text-3xl' : 'text-lg md:text-2xl'} text-neutral-600`

  const titleColorClass = isOnDarkBackground
    ? 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]'
    : 'text-[#10263b]'

  const subtitleColorClass = isOnDarkBackground
    ? 'text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]'
    : 'text-neutral-600'

  return (
    <div className='flex items-center text-center justify-between py-4'>
      <Link to="/" className='flex items-center space-x-3'>
        <img 
        src={logo} 
        alt='220 For Life Logo'
        className={`${imageClassName} ${isOnDarkBackground ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]' : ''}`}
        />
        <div className='flex-col header-font'>
          <h1 className={`${titleClassName} ${titleColorClass}`}>220</h1>
          <p className={`${subtitleClassName} ${subtitleColorClass}`}>FOR LIFE</p>
        </div>
      </Link>
    </div>
  )
}

export default Logo