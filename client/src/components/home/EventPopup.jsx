import React, { useEffect, useState } from 'react'
import SlideDown from '../common/SlideDown'

import { getNextMajorEvent } from '../../data/events'
import Close from '../common/Close'

const EventPopup = () => {
  const [nextEvent, setNextEvent] = useState(null)

  useEffect(() => {
    const event = getNextMajorEvent()
    setNextEvent(event)
  }, [])

  if (!nextEvent) {
    return null
  }

  const mapsLink = `https://maps.google.com?q=${encodeURIComponent(nextEvent.location || '')}`

  return (
    <SlideDown className='fixed top-35 left-1/2 z-40 w-11/12 max-w-xl -translate-x-1/2 rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl md:p-8'>
      <Close onClose={() => setNextEvent(null)} ariaLabel='Close event popup' />

      <h2 className='header-font text-sm uppercase tracking-[0.12em] primary-text'>
        Upcoming Event
      </h2>

      <h1 className='header-font mt-1 text-2xl leading-tight section-heading-text md:text-3xl'>
        {nextEvent.title}
      </h1>

      <div className='mt-2 flex flex-wrap gap-x-3 text-sm text-slate-600'>
        <span>{nextEvent.date}</span>
        {nextEvent.time && <span>· {nextEvent.time}</span>}
      </div>

      <div
        className='body-font mt-4 max-h-40 overflow-y-auto text-slate-700 leading-7 [&_h1]:header-font [&_h1]:mb-2 [&_h1]:text-lg [&_h1]:section-heading-text [&_p]:mb-3'
        dangerouslySetInnerHTML={{ __html: nextEvent.description || '' }}
      />

      <div className='mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4'>
        <p className='body-font text-sm text-slate-600'>{nextEvent.location}</p>
        {nextEvent.location && (
          <a href={mapsLink} target='_blank' rel='noreferrer' className='btn-secondary'>
            Get Directions
          </a>
        )}
      </div>
    </SlideDown>
  )
}

export default EventPopup