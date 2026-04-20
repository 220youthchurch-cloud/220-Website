import React from 'react'
import { FaClock } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const formatTime = (event) => {
  const hasStart = Boolean(event.startTime)
  const hasEnd = Boolean(event.endTime)

  if (hasStart && hasEnd) {
    return `${event.startTime} - ${event.endTime}`
  }

  if (hasStart) {
    return event.startTime
  }

  return event.date || 'Time TBD'
}

const EventsList = ({ events = [], emptyMessage = 'There are no events scheduled.' }) => {
  if (!events.length) {
    return (
      <div className='rounded-2xl border border-[#dbe6ef] bg-white p-8 text-center'>
        <p className='section-body mt-0'>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className='space-y-5'>
      {events.map((event) => (
        <article
          key={event.id}
          className='rounded-2xl border border-[#dbe6ef] bg-white p-6 shadow-sm'
        >
          <div className='flex flex-wrap items-center gap-3'>
            <span className='header-font rounded-full bg-[#e8eff6] px-3 py-1 text-sm uppercase tracking-wide text-[#2c6598]'>
              {event.category}
            </span>
            <h3 className='header-font text-2xl text-[#10263b]'>{event.title}</h3>
          </div>

          <p className='body-font mt-4 flex items-center gap-2 text-slate-700'>
            <FaClock className='text-[#2c6598]' aria-hidden='true' />
            <span>{formatTime(event)}</span>
          </p>

          <p className='body-font mt-2 flex items-center gap-2 text-slate-700'>
            <FaLocationDot className='text-[#2c6598]' aria-hidden='true' />
            <span>{event.location || 'Location TBD'}</span>
          </p>

          <p className='section-body mt-4 max-w-none'>{event.description}</p>
        </article>
      ))}
    </div>
  )
}

export default EventsList