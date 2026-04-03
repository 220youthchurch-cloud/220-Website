import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

import Logo from '../Logo';

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
          <Logo />
          <nav className='flex-1 ml-8 flex items-center justify-end gap-10 max-w-3xl'>
            {navLinks.map((link) => (
              <NavLink 
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${isActive 
                      ? 'primary-text pb-2 border-b-[3px] border-[#2c6598] px-3 transition'
                      : 'text-black hover:text-[#2c6598] hover:border-b-[3px] border-[#f7f7f7] pb-2 px-5 transition-all duration-300 ease-in-out'
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