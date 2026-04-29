import React from 'react'
import PageHeader from '../common/PageHeader'
import FadeIn from '../common/FadeIn'

const MissionVision = () => {
  return (
    <>
      <PageHeader
        title='Mission & Vision'
        description='Our mission guides every decision we make. Our vision inspires us to dream about what God can do through our community.'
      />

      {/* Mission Statement */}
      <FadeIn className='bg-white p-8 md:py-10'>
        <article className='grid w-full md:grid-cols-2'>
          <div className='md:order-1 min-h-80 md:min-h-120'>
            <img
              src='/misc/img1.jpg'
              alt='Our Mission'
              className='h-full w-full object-cover'
              loading='lazy'
            />
          </div>

          <div className='md:order-2 flex min-h-80 items-center justify-center p-8 text-center md:min-h-120 md:p-14'>
            <div className='max-w-2xl'>
              <h2 className='section-heading text-[#10263b]'>Our Mission</h2>
              <p className='section-body'>
                To be a Christ-centered family that empowers people to experience transformation through worship, discipleship, and service. We exist to help individuals find purpose, grow in faith, and make a positive impact in their communities.
              </p>
            </div>
          </div>
        </article>
      </FadeIn>

      {/* Vision Statement */}
      <FadeIn className='bg-[#eef4fa] p-8 md:py-10'>
        <article className='grid w-full md:grid-cols-2'>
          <div className='md:order-2 min-h-80 md:min-h-120'>
            <img
              src='/misc/img8.jpg'
              alt='Our Vision'
              className='h-full w-full object-cover'
              loading='lazy'
            />
          </div>

          <div className='md:order-1 flex min-h-80 items-center justify-center p-8 text-center md:min-h-120 md:p-14'>
            <div className='max-w-2xl'>
              <h2 className='section-heading text-[#10263b]'>Our Vision</h2>
              <p className='section-body'>
                We envision a world where every person knows Christ, experiences authentic community, and uses their gifts to transform their neighborhoods. We see 220 For Life as a beacon of hope—a place where broken people find wholeness, lost people find direction, and all people encounter the love of Jesus Christ.
              </p>
            </div>
          </div>
        </article>
      </FadeIn>

      {/* Core Values */}
      <FadeIn className='bg-white p-8 md:py-10'>
        <div className='content-container'>
          <h2 className='section-heading text-center text-[#10263b] mb-12'>What We Stand For</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2c6598] text-white'>
                <span className='text-2xl font-bold'>✝</span>
              </div>
              <h3 className='section-heading text-lg text-[#10263b] mb-3'>Christ-Centered</h3>
              <p className='section-body'>
                Everything we do is rooted in Jesus Christ. His love, sacrifice, and resurrection are the foundation of our faith and the center of our community.
              </p>
            </div>

            <div className='text-center'>
              <div className='mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2c6598] text-white'>
                <span className='text-2xl font-bold'>🤝</span>
              </div>
              <h3 className='section-heading text-lg text-[#10263b] mb-3'>Community-Focused</h3>
              <p className='section-body'>
                We believe in the power of authentic relationships. Life transformation happens in community, where we support, encourage, and challenge one another.
              </p>
            </div>

            <div className='text-center'>
              <div className='mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#2c6598] text-white'>
                <span className='text-2xl font-bold'>💡</span>
              </div>
              <h3 className='section-heading text-lg text-[#10263b] mb-3'>Purpose-Driven</h3>
              <p className='section-body'>
                Every person has a purpose in God's kingdom. We are committed to helping you discover your calling and equipping you to fulfill it.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export default MissionVision