import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../common/Logo';
import SocialMediaPlatforms from '../common/SocialMediaPlatforms';
import { navLinks } from '../../data/navigation'


const Footer = () => {
  const quickLinks = navLinks

  return (
    <footer className='bg-[#10263b] text-[#f7f7f7]'>
      <div className='content-container py-16'>
        
        {/* Header */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-5 mb-10'>
          <Logo isOnDarkBackground={true} />
          <div className='flex flex-col sm:items-center lg: items-start'>
            <p className='body-font text-[#f7f7f7] text-base leading-7'>Make Disciples<br/>Live the Mission</p>
            <SocialMediaPlatforms size="sm" className='gap-3' displayTitle={false} />
          </div>
        </div>
        
        {/* Quick Links */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 border-y border-[#f7f7f7]/20 py-10'>
          {quickLinks.map((page) => (
            <div key={page.to} className='min-w-0'>
              <Link
                to={page.to}
                className='header-font text-sm uppercase tracking-[0.12em] text-[#f7f7f7] hover:text-[#8fb8df] transition-colors duration-200'
              >
                {page.label}
              </Link>

              {page.subsections?.length > 0 && (
                <ul className='mt-4 space-y-2'>
                  {page.subsections.map((subsection) => (
                    <li key={subsection.to}>
                      <Link
                        to={subsection.to}
                        className='body-font text-sm text-[#f7f7f7]/70 hover:text-[#8fb8df] transition-colors duration-200'
                      >
                        {subsection.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        {/* Copyright */}
        <div className='pt-6 flex flex-row sm:flex-row sm:items-center gap-3'>
          <p className='body-font text-sm text-[#f7f7f7]/80'>
            © {new Date().getFullYear()} Gospel Light Eritrean Baptist Church -  220 Youth Group. All rights reserved.
          </p>
          <p className='body-font text-sm text-[#f7f7f7]/70'>
            Building disciples who live on mission.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer