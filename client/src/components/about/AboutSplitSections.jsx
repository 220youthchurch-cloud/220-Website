import React from 'react'
import FadeIn from '../common/FadeIn'

const sectionGroups = [
  {
    id: 'about-primary',
    backgroundClass: 'bg-white',
    sections: [
      {
        title: 'Who We Are',
        image: '/misc/img3.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        title: 'What We Believe',
        image: '/misc/img9.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
  },
  {
    id: 'about-secondary',
    backgroundClass: 'bg-[#eef4fa]',
    sections: [
      {
        title: 'How We Serve',
        image: '/misc/img6.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam.',
      },
      {
        title: 'Where We Are Going',
        image: '/misc/img11.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis.',
      },
    ],
  },
]

const AboutSplitSections = () => {
  return (
    <div className='w-full'>
      {sectionGroups.map((group) => (
        <FadeIn key={group.id} className={`${group.backgroundClass} p-8 md:py-10`}>
          {group.sections.map((section, index) => {
            const isReversed = index % 2 !== 0

            return (
              <article key={section.title} className='grid w-full md:grid-cols-2'>
                <div className={`${isReversed ? 'md:order-2' : 'md:order-1'} min-h-80 md:min-h-120`}>
                  <img
                    src={section.image}
                    alt={section.title}
                    className='h-full w-full object-cover'
                    loading='lazy'
                  />
                </div>

                <div className={`${isReversed ? 'md:order-1' : 'md:order-2'} flex min-h-80 items-center justify-center p-8 text-center md:min-h-120 md:p-14`}>
                  <div className='max-w-2xl'>
                    <h2 className='section-heading text-[#10263b]'>{section.title}</h2>
                    <p className='section-body'>{section.description}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </FadeIn>
      ))}
    </div>
  )
}

export default AboutSplitSections