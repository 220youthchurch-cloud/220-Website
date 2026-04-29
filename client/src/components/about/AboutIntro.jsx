import React from 'react'
import FadeIn from '../common/FadeIn'

const AboutIntro = () => {
  return (
    <FadeIn className='bg-white section-padding'>
      <div className='content-container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div>
            <img
              src='/misc/img13.jpg'
              alt='220 For Life Community'
              className='w-full rounded-lg object-cover'
              loading='lazy'
            />
          </div>

          <div>
            <h2 className='section-heading text-[#10263b] mb-6'>Who We Are</h2>
            <p className='section-body mb-6'>
              220 For Life is more than just a church—we're a family united by faith in Jesus Christ and a commitment to serving our community with love and purpose. We believe that every person has value, every story matters, and every life can be transformed through the power of God's grace.
            </p>
            <p className='section-body mb-6'>
              Whether you're taking your first steps in faith or have been following Christ for decades, you'll find a welcoming community here. We worship together, grow together through discipleship, and serve others as an expression of our love for Jesus.
            </p>
            <p className='section-body'>
              Our vision is simple yet profound: to see lives transformed, communities strengthened, and God's kingdom advanced through authentic faith and genuine community. Join us as we explore what it means to live for Christ in the 21st century.
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default AboutIntro
