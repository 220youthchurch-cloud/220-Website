import React from 'react'
import FadeIn from "../common/FadeIn"

const Motto = () => {
  return (
    <FadeIn className='section-padding pt-1 bg-[#2c6598]'>
      <div className='flex flex-col items-center text-center secondary-text gap-5 px-15'>
        <h1 className='header-font text-[50px] font-extrabold'>IDENTITY. COMMUNITY. PURPOSE.</h1>
        <p>This generation is being told a thousand stories about who they are — that their identity is in their performance, their followers, their grades, their relationships, their image. They are exhausted from carrying identities that were never meant to be theirs.</p>
        <p>220 exists to tell another story. Your identity is in Christ. He defines you. He chose you. He paid for you. He lives in you. Nothing in heaven or on earth can take that from you — not failure, not family pressure, not the cruelty of the internet, not even your own sin.</p>
        <p>And you don't have to carry it alone. The foundation of our ministry is character. The nature of our ministry is service. The motive is love. And the model is Jesus Christ Himself.</p>
        <p>Whoever you are and wherever you're coming from — there is a place for you here.</p>
      </div>
    </FadeIn>
  )
}

export default Motto