import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { FaAngleDown } from 'react-icons/fa';

import Logo from '../common/Logo';
import { navLinks } from '../../data/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const { pathname } = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
    setOpenMobileSubmenu(null)
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

  const desktopSubLinkClass = ({ isActive }) => {
    if (isTransparentTopMode) {
      return `${isActive
        ? 'bg-white/20 text-white'
        : 'text-white/90 hover:bg-white/15 hover:text-white'
      } block rounded-md px-4 py-2 text-sm header-font transition-colors duration-200`
    }

    return `${isActive
      ? 'bg-[#e8eff6] text-[#2c6598]'
      : 'text-[#10263b] hover:bg-[#e8eff6] hover:text-[#2c6598]'
    } block rounded-md px-4 py-2 text-sm header-font transition-colors duration-200`
  }

  const mobileLinkClass = ({ isActive }) =>
    `${isActive
      ? 'bg-[#2c6598] text-white'
      : 'text-[#10263b] hover:bg-[#e8eff6]'
    } header-font w-full rounded-xl px-5 py-4 text-left text-xl sm:text-2xl transition-colors duration-200`

  // Combine classes for the navbar shell
  // Base styles for positioning and transitions
  const navbarShellClass = [
    'inset-x-0 z-50 transition-transform duration-300 ease-in-out',
    isTransparentTopMode
      ? 'absolute top-0 bg-gradient-to-b from-black/65 via-black/30 to-transparent'
      : 'fixed top-0 bg-white shadow-md',
    !isAtTop && !showNavbar ? '-translate-y-full' : 'translate-y-0',
  ].join(' ') // Join the array into a single string of classes

  
  return (
    <>
      {!isTransparentTopMode && <div aria-hidden='true' className='h-28 md:h-32' />} {/* Spacer to prevent content jump when navbar becomes fixed */}
      <div className={navbarShellClass}>
        <div className='relative z-50'>
          <div className='container-custom'>
            <Logo isLarge={isAtTop} isOnDarkBackground={isTransparentTopMode} />

            {/* Hamburger menu button for mobile */}
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
              {navLinks.map((link) => {
                if (!link.subsections) {
                  return (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={desktopLinkClass}
                    >
                      {link.label}
                    </NavLink>
                  )
                }

                return (
                  <div key={link.to} className='group relative'>
                    {/* Main link */}
                    <NavLink
                      to={link.to}
                      className={desktopLinkClass}
                    >
                      {link.label}
                    </NavLink>

                    {/* Submenu */}
                    <div className='absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 ease-out'>
                      <div
                        className={`${isTransparentTopMode
                          ? 'border border-white/25 bg-black/75 backdrop-blur-md'
                          : 'border border-gray-200 bg-white shadow-xl'
                        } min-w-55 rounded-xl p-2`}
                      >
                        {link.subsections.map((subsection) => (
                          <NavLink
                            key={subsection.to}
                            to={subsection.to}
                            className={desktopSubLinkClass}
                          >
                            {subsection.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-40 bg-white md:hidden'>
          <nav className='flex h-full w-full flex-col items-stretch justify-center gap-4 px-6'>
            {navLinks.map((link) => (
              <div key={link.to} className='w-full'>
                <div className='flex w-full items-center gap-2'>
                  <NavLink
                    to={link.to}
                    className={mobileLinkClass}
                  >
                    {link.label}
                  </NavLink>

                  {link.subsections && (
                    <button
                      type='button'
                      onClick={() =>
                        setOpenMobileSubmenu((prev) => (prev === link.to ? null : link.to))
                      }
                      aria-expanded={openMobileSubmenu === link.to}
                      aria-label={`Toggle ${link.label} subsections`}
                      className='inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#c5d8e8] text-[#2c6598] transition-colors duration-200 hover:bg-[#e8eff6]'
                    >
                      <FaAngleDown
                        className={`text-xl transition-transform duration-200 ${
                          openMobileSubmenu === link.to ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>
                  )}
                </div>
                
                {/* Submenu for mobile - collapsible */}
                {link.subsections && (
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      openMobileSubmenu === link.to
                        ? 'grid-rows-[1fr] opacity-100 mt-2'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className='min-h-0 overflow-hidden'>
                      <div className='grid w-full gap-2 rounded-2xl bg-[#f3f7fb] p-3'>
                        {link.subsections.map((subsection) => (
                          <NavLink
                            key={subsection.to}
                            to={subsection.to}
                            className={({ isActive }) =>
                              `${isActive
                                ? 'bg-[#2c6598] text-white'
                                : 'text-[#10263b] hover:bg-[#e8eff6]'
                              } header-font w-full rounded-lg px-4 py-3 text-left text-sm transition-colors duration-200`
                            }
                          >
                            {subsection.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar