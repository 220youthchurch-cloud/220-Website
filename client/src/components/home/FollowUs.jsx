import { React } from 'react'

import SocialMediaPlatforms from '../SocialMediaPlatforms'  

const FollowUs = () => {
  return (
    <section className='section-padding text-center text-[#f7f7f7] bg-[#1a1a1a]'>
      <div className='flex flex-col gap-7 items-center'>
        <div>
          <h2 className='header-font text-[4rem]'>Follow Us</h2>
          <p className='body-font'>Follow us on social media to stay updated.</p>
        </div>        
        <div className='w-fit'>
          <SocialMediaPlatforms iconSize={50} className='text-white justify-around sm:text-1xl md:text-2xl lg:text-3xl gap-10' />
        </div>
      </div>
    </section>
  )
}

export default FollowUs