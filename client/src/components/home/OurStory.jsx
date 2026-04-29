import React from 'react'
import PageHeader from '../common/PageHeader'
import FadeIn from '../common/FadeIn'

const OurStory = () => {
  const sections = [
    {
      title: 'How It All Began',
      image: '/misc/img9.jpg',
      description:
        '220 For Life started with a simple vision: to build a community of believers dedicated to growing in faith, worshipping together, and serving others with Christ-centered love. From our humble beginnings, we have grown into a thriving congregation that remains committed to the core values that define us—authenticity, community, and purposeful service.',
      backgroundColor: 'bg-white',
    },
    {
      title: 'Growing Together',
      image: '/misc/img5.jpg',
      description:
        'Over the years, our church has expanded in ways we never imagined. What started as a small gathering has become a diverse, multigenerational family. Through worship services, discipleship programs, and outreach initiatives, we have learned that growth isn\'t just about numbers—it\'s about depth, transformation, and genuine connection with God and one another.',
      backgroundColor: 'bg-[#eef4fa]',
    },
    {
      title: 'Our Mission Today',
      image: '/misc/img13.jpg',
      description:
        'Today, 220 For Life continues to impact lives through innovative ministry, compassionate outreach, and biblical teaching. We remain focused on our mission to help people experience transformation through Christ, find belonging in community, and discover their purpose in serving others. Every member, every program, and every initiative is guided by this overarching purpose.',
      backgroundColor: 'bg-white',
    },
  ]

  return (
    <>
      <PageHeader
        title='Our Story'
        description='From our humble beginnings to where we are today, discover the journey of 220 For Life and how God has led us to become a Christ-centered community.'
      />

      <div className='w-full'>
        {sections.map((section, index) => (
          <FadeIn key={section.title} className={`${section.backgroundColor} p-8 md:py-10`}>
            <article className='grid w-full md:grid-cols-2'>
              <div className={`${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'} min-h-80 md:min-h-120`}>
                <img
                  src={section.image}
                  alt={section.title}
                  className='h-full w-full object-cover'
                  loading='lazy'
                />
              </div>

              <div className={`${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'} flex min-h-80 items-center justify-center p-8 text-center md:min-h-120 md:p-14`}>
                <div className='max-w-2xl'>
                  <h2 className='section-heading text-[#10263b]'>{section.title}</h2>
                  <p className='section-body'>{section.description}</p>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </>
  )
}

export default OurStory