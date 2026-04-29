import React from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../common/FadeIn'

const AboutSubsectionCards = () => {
  const subsections = [
    {
      id: 1,
      title: 'Our Story',
      subtitle: 'From Humble Beginnings to Today',
      description: 'Discover the journey of 220 For Life—how God has guided us from our founding to becoming a thriving, multi-generational community of faith.',
      link: '/about/our-story',
      icon: '📖',
      image: '/misc/img5.jpg',
      color: 'from-[#2c6598] to-[#1f5079]',
    },
    {
      id: 2,
      title: 'Mission & Vision',
      subtitle: 'Where We Are Heading',
      description: 'Learn about our mission to help people experience transformation through Christ, and our vision for a world changed by authentic faith.',
      link: '/about/mission-vision',
      icon: '🎯',
      image: '/misc/img8.jpg',
      color: 'from-[#1f5079] to-[#2c6598]',
    },
    {
      id: 3,
      title: 'What We Believe',
      subtitle: 'Our Core Convictions',
      description: 'Explore the biblical truths that guide everything we do—from our worship practices to our commitment to community service.',
      link: '/about/beliefs',
      icon: '✝️',
      image: '/misc/img12.jpg',
      color: 'from-[#2c6598] to-[#1f5079]',
    },
  ]

  return (
    <FadeIn className='bg-[#f3f7fb] section-padding'>
      <div className='content-container'>
        <div className='text-center mb-16'>
          <h2 className='section-heading text-[#10263b] mb-4'>Learn More About Us</h2>
          <p className='section-body max-w-2xl mx-auto'>
            Dive deeper into who we are, what we stand for, and where we're going as a faith community.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {subsections.map((section) => (
            <Link key={section.id} to={section.link} className='group'>
              <div className='h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col'>
                {/* Image Section */}
                <div className='relative h-48 overflow-hidden bg-gray-200'>
                  <img
                    src={section.image}
                    alt={section.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                    loading='lazy'
                  />
                  <div className={`absolute inset-0 bg-linear-to-t ${section.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>

                {/* Content Section */}
                <div className='flex flex-col grow p-6'>
                  <div className='text-4xl mb-3'>{section.icon}</div>
                  <h3 className='header-font text-xl text-[#10263b] mb-2'>{section.title}</h3>
                  <p className='header-font text-sm text-[#2c6598] mb-3 uppercase tracking-wide'>
                    {section.subtitle}
                  </p>
                  <p className='body-font text-sm text-slate-700 grow mb-4'>
                    {section.description}
                  </p>

                  {/* CTA */}
                  <div className='inline-flex items-center text-[#2c6598] font-[lato] font-bold group-hover:text-[#1f5079] transition-colors duration-200'>
                    <span>Learn More</span>
                    <span className='ml-2 group-hover:translate-x-1 transition-transform duration-200'>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

export default AboutSubsectionCards
