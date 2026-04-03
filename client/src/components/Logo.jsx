import React from 'react'
import { Link } from 'react-router-dom';

import logo from '/220_logo.png';

const Logo = () => {
  return (
    <div className='flex items-center text-center justify-between py-4'>
      <Link to="/" className='flex items-center space-x-3'>
        <img 
        src={logo} 
        alt='220 For Life Logo'
        className='w-16 h-16'
        />
        <div className='flex-col header-font'>
          <h1 className='text-2xl md:text-4xl font-heading font-bold'>220</h1>
          <p className='text-lg md:text-2xl text-neutral-600'>FOR LIFE</p>
        </div>
      </Link>
    </div>
  )
}

export default Logo