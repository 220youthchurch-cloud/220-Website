import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo';


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
    <div>
      footer
    </div>
  )
}

export default Footer