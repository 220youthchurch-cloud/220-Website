import React from 'react'
import GroupPicture from '/220GroupPictureMarch.png'

const WelcomeTo220 = () => {
  return (
    <section className='section-padding bg-[linear-gradient(170deg,#FFFFFF_50%,#2c6598_50%)]'>
      <div className='content-container bg-[#f7f7f7] borer rounded-2xl py-10 md:py-12'>
        <div className='flex flex-col gap-10 md:flex-row md:items-center'>
          <div className='md:w-1/2'>
            <h1 className='section-heading primary-text'>Welcome To 220!</h1>
            <p className='section-body'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. <span className='header-font font-bold'>Nulla consequat massa quis enim</span>. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
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
    </section>
  )
}

export default WelcomeTo220