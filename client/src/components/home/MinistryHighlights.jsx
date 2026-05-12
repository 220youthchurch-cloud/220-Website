import React from 'react'
import FadeIn from "../common/FadeIn"
import { Link } from 'react-router-dom'

const highlightItems = [
  {
    title: 'What is 220?',
    imageUrl: '/misc/img1.jpg',
    to: '/about/what-is-220',
  },
  {
    title: 'What we believe',
    imageUrl: '/misc/img11.jpg',
    to: '/about/beliefs',
  },
  {
    title: 'Worship',
    imageUrl: '/misc/img3.jpg',
    to: '/serve/worship-team',
  },
  {
    title: 'Mission & Vision',
    imageUrl: '/misc/img4.jpg',
    to: '/about/mission-vision',
  },
]

const HighlightCard = ({ title, imageUrl, to }) => {
  return (
    <div className='relative h-104 overflow-hidden rounded-2xl'>
      <img
        src={imageUrl}
        alt={title}
        className='absolute inset-0 h-full w-full object-cover'
      />
      <div className='absolute inset-0 bg-black/35' />

      <div className='relative z-10 flex h-full flex-col items-center justify-end gap-4 p-6 text-center'>
        <h3 className='header-font text-2xl text-white'>{title}</h3>
        <Link
          to={to}
          className='inline-flex items-center justify-center rounded-full border border-white/70 bg-white/20 px-5 py-2 font-[lato] text-sm font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-[#10263b]'
        >
          learn more
        </Link>
      </div>
    </div>
  )
}

const MinistryHighlights = () => {
  return (
    <FadeIn className='bg-white py-10'>
      <div className='content-container'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          {highlightItems.map((item) => (
            <HighlightCard
              key={item.title}
              title={item.title}
              imageUrl={item.imageUrl}
              to={item.to}
            />
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

export default MinistryHighlights
