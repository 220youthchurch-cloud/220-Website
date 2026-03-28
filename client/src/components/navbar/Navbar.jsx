import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const navLinks = [
    {to: '/', label: 'Home'},
    {to: '/about', label: 'about'},
    {to: '/ourTeam', label: 'ourTeam'},
    {to: '/events', label: 'events'},
    {to: '/contact', label: 'contact'},
  ]

  
  return (
    <>
      <div className='sticky top-0 z-50 bg-gray shadow-md'>
        <div className='container-custom'>
          <div className='flex items-center justify-between py-4'>
            <Link to="/" className='flex items-center space-x-3'>
              <img />
              LOGO HERE
              <div className='flex-col'>
                <h1 className='text-xl md:text-2xl font-heading font-bold'>
                  220
                </h1>
                <p>Youth Group</p>
              </div>
            </Link>
          </div> 
        </div>
      </div>
    </>
  )
}

export default Navbar