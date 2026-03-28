import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

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
      <div className='sticky top-0 z-50 bg-gray shadow-md'>
        <div className='container-custom'>
          <div className='flex items-center justify-between py-4'>
            <Link to="/" className='flex items-center space-x-3'>
              <img 
              src={`${import.meta.env.BASE_URL}public/220_logo.png`} 
              alt='220 For Life Logo'
              className='w-16 h-16'
              />
              <div className='flex-col'>
                <h1 className='text-xl md:text-2xl font-heading font-bold'>220</h1>
                <p className='text-xs md:text-sm text-neutral-600'>Youth Group</p>
              </div>
            </Link>
          </div>
          <nav className='flex items-center space-x-1 lg:space-x-2'>
            {navLinks.map((link) => (
              <NavLink 
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${isActive 
                    ? 'text-blue-600' 
                    : 'text-black'
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