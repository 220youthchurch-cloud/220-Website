import React from 'react'
import FadeIn from "../common/FadeIn"
import GroupPicture from '/220GroupPictureMarch.png'

const WelcomeTo220 = () => {
  return (
    <FadeIn className='section-padding bg-[linear-gradient(170deg,#FFFFFF_50%,#2c6598_50%)]'>
      <div className='content-container bg-[#f7f7f7] borer rounded-2xl py-10 md:py-12'>
        <div className='flex flex-col gap-10 md:flex-row md:items-center'>
          <div className='md:w-1/2'>
            <h1 className='section-heading primary-text'>Welcome To 220!</h1>
            <p className='section-body'>
            Welcome to 220 - the Youth & Young Adults Ministry of Gospel Light Eritrean Church. Our name comes from <span className='header-font font-bold'>Galatians 2:20</span>, a single verse that holds everything this ministry exists to proclaim: identity, death to self, the indwelling Christ, a life lived by faith, and a Savior who loved us and gave Himself for us. We didn't choose this name because it sounded clever. We chose it because it tells the truth — about who we are, and about who we believe every young person who walks through our doors is meant to become. We're glad you're here.
            </p>
            <a href='/about'>
              <button className='btn-primary mt-8'>About Us</button>
            </a>
          </div>
          <div className='md:w-1/2'>
            <img className='w-full rounded-3xl object-cover' src={GroupPicture} alt='220 Youth group' />
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default WelcomeTo220