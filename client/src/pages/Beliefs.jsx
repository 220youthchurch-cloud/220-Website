import React from 'react'
import PageHeader from '../components/common/PageHeader'
import FadeIn from '../components/common/FadeIn'

const Beliefs = () => {
  const beliefs = [
    {
      title: 'The Authority of Scripture',
      description:
        'We believe the Bible is the authoritative, inspired Word of God. It is our guide for faith, practice, and daily living. We are committed to teaching, studying, and living out the truths found in Scripture.',
    },
    {
      title: 'Salvation Through Christ',
      description:
        'We believe that Jesus Christ died for our sins, rose from the dead, and offers salvation to all who believe in Him. Salvation is a gift of God\'s grace, not earned by our works, and is available to everyone.',
    },
    {
      title: 'The Trinity',
      description:
        'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit. Each person of the Godhead is fully divine and actively involved in redemption and sustaining creation.',
    },
    {
      title: 'The Power of the Holy Spirit',
      description:
        'We believe the Holy Spirit is God\'s presence within believers, empowering us for transformed living, spiritual growth, and effective ministry. The Spirit\'s fruit in our lives is evidence of a genuine faith.',
    },
    {
      title: 'Transformation Through Discipleship',
      description:
        'We believe that true faith is evidenced by a transformed life. We are committed to helping people grow in their relationship with Christ through prayer, Bible study, worship, and community engagement.',
    },
    {
      title: 'Service and Love for Others',
      description:
        'We believe we are called to demonstrate Christ\'s love through serving others, caring for the vulnerable, and working for justice. Our faith must result in actions that reflect God\'s compassion.',
    },
  ]

  return (
    <>
      <PageHeader
        title='What We Believe'
        description='We are committed to biblical truth and the historic Christian faith. These core beliefs guide our worship, teaching, and service to our community.'
      />

      {/* Core Beliefs Grid */}
      <FadeIn className='bg-white section-padding'>
        <div className='content-container'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {beliefs.map((belief, index) => (
              <div key={index} className='border-l-4 border-[#2c6598] pl-6'>
                <h3 className='font-[lato] text-xl md:text-2xl font-bold text-[#10263b] mb-3'>
                  {belief.title}
                </h3>
                <p className='body-font text-base md:text-lg leading-8 text-slate-700'>
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Doctrinal Foundation */}
      <FadeIn className='bg-[#eef4fa] section-padding'>
        <article className='grid w-full md:grid-cols-2 items-center gap-12'>
          <div>
            <img
              src='/misc/img12.jpg'
              alt='Our Faith Community'
              className='w-full object-cover rounded-lg'
              loading='lazy'
            />
          </div>

          <div>
            <h2 className='section-heading text-[#10263b] mb-6'>Our Doctrinal Foundation</h2>
            <p className='section-body mb-6'>
              While these core beliefs define our faith, we recognize that Christians across denominations and traditions may express their faith differently. We are committed to being welcoming and inclusive while remaining firm in our convictions about the essentials of the Christian faith.
            </p>
            <p className='section-body'>
              Our beliefs are grounded in the historic creeds of Christianity and affirmed through ongoing prayer, study, and spiritual discernment. We invite you to explore these truths with us and discover how they can transform your life and deepen your relationship with God.
            </p>
          </div>
        </article>
      </FadeIn>

      {/* Call to Discipleship */}
      <FadeIn className='bg-white section-padding'>
        <div className='content-container text-center'>
          <h2 className='section-heading text-[#10263b] mb-6'>Join Us on This Journey</h2>
          <p className='section-body max-w-3xl mx-auto mb-8'>
            Whether you\'re curious about Christianity, seeking to deepen your faith, or looking for a community that shares your values, we welcome you to 220 For Life. Come as you are, and let\'s explore these beliefs together.
          </p>
          <a href='/contact' className='btn-primary'>
            Get in Touch
          </a>
        </div>
      </FadeIn>
    </>
  )
}

export default Beliefs