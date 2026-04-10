import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from '../common/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const navLinks = [
    {to: '/', label: 'Home'},
    {to: '/about', label: 'about'},
    {to: '/our-team', label: 'Our Team'},
    {to: '/events', label: 'events'},
    {to: '/contact', label: 'contact'},
  ]

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const desktopLinkClass = ({ isActive }) =>
    `${isActive
      ? 'primary-text pb-2 border-b-[3px] border-[#2c6598] px-3'
      : 'text-black hover:text-[#2c6598] hover:border-b-[3px] border-[#f7f7f7] pb-2 px-4'
    } transition-all duration-300 ease-in-out`

  const mobileLinkClass = ({ isActive }) =>
    `${isActive
      ? 'bg-[#2c6598] text-white'
      : 'text-[#10263b] hover:bg-[#e8eff6]'
    } header-font rounded-xl px-8 py-4 text-2xl transition-colors duration-200`

  
  return (
    <div className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='relative z-50'>
        <div className='container-custom'>
          <Logo />

          <button
            type='button'
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className='md:hidden relative inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#2c6598]/30 text-[#2c6598]'
          >
            <span
              className={`absolute h-0.5 w-6 bg-current transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-current transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
              }`}
            />
          </button>

          <nav className='hidden md:flex flex-1 ml-8 items-center justify-end gap-6 lg:gap-10 max-w-3xl'>
            {navLinks.map((link) => (
              <NavLink 
                key={link.to}
                to={link.to}
                className={desktopLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className='fixed inset-0 z-40 bg-white md:hidden'>
          <nav className='flex h-full w-full flex-col items-center justify-center gap-5 px-6'>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={mobileLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navbar