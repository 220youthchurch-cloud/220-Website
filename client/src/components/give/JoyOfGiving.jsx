import React from 'react'
import FadeIn from '../common/FadeIn'

const JoyOfGiving = () => {
  return (
    <FadeIn className='section-padding bg-white'>
      <div className='content-container max-w-3xl text-center'>
        <h2 className='section-heading section-heading-text'>The Joy of Giving</h2>
        <p className='section-body'>
          Giving is an act of worship and an expression of our gratitude to God for His abundant blessings.
        </p>

        <div className='mt-10 space-y-8'>
          <blockquote className='border-l-4 border-[#2c6598] pl-6 text-left'>
            <p className='body-font text-lg italic leading-8 text-slate-700'>
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <cite className='header-font mt-3 block text-sm not-italic primary-text'>
              — 2 Corinthians 9:7
            </cite>
          </blockquote>

          <blockquote className='border-l-4 border-[#2c6598] pl-6 text-left'>
            <p className='body-font text-lg italic leading-8 text-slate-700'>
              "Honor the Lord with your wealth, with the firstfruits of all your crops."
            </p>
            <cite className='header-font mt-3 block text-sm not-italic primary-text'>
              — Proverbs 3:9
            </cite>
          </blockquote>
        </div>
      </div>
    </FadeIn>
  )
}

export default JoyOfGiving