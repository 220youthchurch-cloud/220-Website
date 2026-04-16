import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from '../common/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const { pathname } = useLocation()

  const navLinks = [
    {to: '/', label: 'Home'},
    {to: '/about', label: 'about'},
    {to: '/our-team', label: 'Our Team'},
    {to: '/events', label: 'events'},
    {to: '/sermons', label: 'sermons'},
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

  useEffect(() => {
    const minScrollDelta = 6 // Minimum scroll delta in pixels to trigger navbar visibility change

    const handleScroll = () => {
      // Get the current scroll position
      const currentScrollY = window.scrollY
      const atTop = currentScrollY <= 8

      if (atTop) {
        // Only update state if it has changed to avoid unnecessary re-renders
        setIsAtTop((prev) => (prev === true ? prev : true))
        setIsNavbarVisible((prev) => (prev === true ? prev : true))
        lastScrollYRef.current = currentScrollY // Reset last scroll position when at the top to prevent jumpy behavior
        return
      }

      // If we're not at the top, ensure the state reflects that
      setIsAtTop((prev) => (prev === false ? prev : false))

      const scrollDelta = currentScrollY - lastScrollYRef.current // Only update visibility if the scroll delta exceeds the minimum threshold

      // If the scroll delta is too small, don't update the navbar visibility to prevent it from toggling on minor scrolls
      if (Math.abs(scrollDelta) < minScrollDelta) {
        return
      }

      // If the user scrolled down, hide the navbar; if they scrolled up, show it
      if (scrollDelta > 0) {
        setIsNavbarVisible(false)
      } else {
        setIsNavbarVisible(true)
      }

      lastScrollYRef.current = currentScrollY // Update the last scroll position for the next scroll event
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isHomeRoute = pathname === '/'
  const isTransparentTopMode = isHomeRoute && isAtTop
  const showNavbar = isAtTop || isNavbarVisible || isMenuOpen

  const desktopLinkClass = ({ isActive }) => {
    if (isTransparentTopMode) {
      return `${isActive
        ? 'text-white border-b-[3px] border-white px-3 pb-2'
        : 'text-white/90 hover:text-white hover:border-b-[3px] border-transparent px-4 pb-2'
      } drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] transition-all duration-300 ease-in-out`
    }

    return `${isActive
      ? 'primary-text pb-2 border-b-[3px] border-[#2c6598] px-3'
      : 'text-black hover:text-[#2c6598] hover:border-b-[3px] border-[#f7f7f7] pb-2 px-4'
    } transition-all duration-300 ease-in-out`
  }

  const mobileLinkClass = ({ isActive }) =>
    `${isActive
      ? 'bg-[#2c6598] text-white'
      : 'text-[#10263b] hover:bg-[#e8eff6]'
    } header-font rounded-xl px-8 py-4 text-2xl transition-colors duration-200`

  // Combine classes for the navbar shell
  // Base styles for positioning and transitions
  const navbarShellClass = [
    'inset-x-0 z-50 transition-transform duration-300 ease-in-out',
    isTransparentTopMode
      ? 'absolute top-0 bg-gradient-to-b from-black/65 via-black/30 to-transparent'
      : 'fixed top-0 bg-white shadow-md',
    !isAtTop && !showNavbar ? '-translate-y-full' : 'translate-y-0',
  ].join(' ')

  
  return (
    <>
      {!isTransparentTopMode && <div aria-hidden='true' className='h-28 md:h-32' />} {/* Spacer to prevent content jump when navbar becomes fixed */}
      <div className={navbarShellClass}>
        <div className='relative z-50'>
          <div className='container-custom'>
            <Logo isLarge={isAtTop} isOnDarkBackground={isTransparentTopMode} />

            <button
              type='button'
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={`${isTransparentTopMode
                ? 'border-white/60 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]'
                : 'border-[#2c6598]/30 text-[#2c6598]'
              } md:hidden relative inline-flex h-11 w-11 items-center justify-center rounded-lg`}
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
    </>
  )
}

export default Navbar