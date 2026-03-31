import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

import logo from '/220_logo.png';

const Navbar = () => {
  const navLinks = [
    {to: '/', label: 'Home'},
    {to: '/about', label: 'about'},
    {to: '/our-team', label: 'Our Team'},
    {to: '/events', label: 'events'},
    {to: '/contact', label: 'contact'},
  ]

  
  return (
    <>
      <div className='sticky top-0 z-50 bg-white shadow-md'>
        <div className='container-custom'>
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
          <nav className='flex-1 ml-8 flex items-center justify-end gap-10 max-w-3xl'>
            {navLinks.map((link) => (
              <NavLink 
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${isActive 
                      ? 'text-[#2c6598] pb-2 border-b-[3px] border-[#2c6598] px-3 transition'
                      : 'text-black hover:text-[#2c6598] hover:border-b-[3px] border-[#f8f8f8] pb-2 px-5 transition-all duration-300 ease-in-out'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>          
        </div>
      </div>
    </>
  )
}

export default Navbar