import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo';
import SocialMediaPlatforms from '../SocialMediaPlatforms';


const Footer = () => {
  const quickLinks = [
    {
      title: 'Home',
      path: '/',
      subsections: ['Home Subsection Placeholder', 'Home Subsection Placeholder', 'Home Subsection Placeholder'],
    },
    {
      title: 'About',
      path: '/about',
      subsections: ['About Subsection Placeholder', 'About Subsection Placeholder', 'About Subsection Placeholder'],
    },
    {
      title: 'Our Team',
      path: '/our-team',
      subsections: ['Team Subsection Placeholder', 'Team Subsection Placeholder', 'Team Subsection Placeholder'],
    },
    {
      title: 'Events',
      path: '/events',
      subsections: ['Events Subsection Placeholder', 'Events Subsection Placeholder', 'Events Subsection Placeholder'],
    },
    {
      title: 'Contact',
      path: '/contact',
      subsections: ['Contact Subsection Placeholder', 'Contact Subsection Placeholder', 'Contact Subsection Placeholder'],
    },
  ]

  return (
    <footer className='bg-[#10263b] text-[#f7f7f7]'>
      <div className='content-container py-16'>
        
        {/* Header */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-5 mb-10'>
          <Logo />
          <div className='flex flex-col justify-center text-center'>
            <p className='body-font text-[#f7f7f7] text-base leading-7'>Make Disciples<br/>Live the Mission</p>
            <SocialMediaPlatforms size="sm" className='gap-3' displayTitle={false} />
          </div>
        </div>
        
        {/* Quick Links */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 border-y border-[#f7f7f7]/20 py-10'>
          {quickLinks.map((page) => (
            <div key={page.title} className='min-w-0'>
              <Link
                to={page.path}
                className='header-font text-sm uppercase tracking-[0.12em] text-[#f7f7f7] hover:text-[#8fb8df] transition-colors duration-200'
              >
                {page.title}
              </Link>

              <ul className='mt-4 space-y-2'>
                {page.subsections.map((item, index) => (
                  <li key={`${page.title}-${index}`}>
                    <span className='body-font text-sm text-[#f7f7f7]/70'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright */}
        <div className='pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
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