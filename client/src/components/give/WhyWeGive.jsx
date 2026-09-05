import React from 'react'
import FadeIn from '../common/FadeIn'

const reasons = [
  'To worship God and acknowledge Him as the source of all our blessings',
  'To support the ongoing work of the church and its ministries',
  "To participate in God's work of reaching the lost and caring for those in need",
  'To grow in our trust and dependence on God',
]

const WhyWeGive = () => {
  return (
    <FadeIn className='section-padding bg-[#f8fbfe]'>
      <div className='content-container max-w-3xl'>
        <h2 className='section-heading text-center section-heading-text'>Why We Give</h2>

        <ul className='mt-8 space-y-4'>
          {reasons.map((reason) => (
            <li key={reason} className='flex items-start gap-3'>
              <span className='mt-3 h-2 w-2 shrink-0 rounded-full primary-bg' />
              <p className='body-font text-lg leading-8 text-slate-700'>{reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

export default WhyWeGive