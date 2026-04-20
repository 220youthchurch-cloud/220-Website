import React, { useMemo, useState } from 'react'

import { FaList, FaCalendarAlt } from "react-icons/fa";

import PageHeader from '../components/common/PageHeader'
import EventsCalendar from '../components/events/EventsCalendar'
import EventsList from '../components/events/EventsList'
import { events, getUpcomingEvents } from '../data/events'

import FadeIn from '../components/common/FadeIn'

const Events = () => {
  const [viewMode, setViewMode] = useState('list')
  const upcomingEvents = useMemo(() => getUpcomingEvents(), [])
  const upcomingEventsCount = upcomingEvents.length

  const viewButtonClass = (mode) =>
    `${
      viewMode === mode
        ? 'bg-[#2c6598] text-white border-[#2c6598]'
        : 'bg-white text-[#2c6598] border-[#c5d8e8] hover:bg-[#e8eff6]'
    } header-font inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm uppercase tracking-wide transition-colors duration-200`

  return (
    <>
      <PageHeader
        title='Events'
        description='Check out our upcoming events and join us for worship, fellowship, and service opportunities.'
      />

      <FadeIn className='section-padding bg-[#f8fbfe]'>
        <div className='content-container'>
          <div className='flex flex-wrap items-center gap-3'>
            <button
              type='button'
              onClick={() => setViewMode('list')}
              className={viewButtonClass('list')}
            >
            <FaList />
              List
            </button>
            <button
              type='button'
              onClick={() => setViewMode('calendar')}
              className={viewButtonClass('calendar')}
            >
              <FaCalendarAlt />
              Calendar
            </button>
          </div>

          {viewMode === 'list' ? (
            <div className='mt-8'>
              <h2 className='section-heading text-[#10263b]'>Upcoming Events</h2>
              <p className='section-body mt-3'>
                {upcomingEventsCount === 0
                  ? 'No events are currently scheduled.'
                  : `${upcomingEventsCount} event${upcomingEventsCount === 1 ? '' : 's'} scheduled.`}
              </p>
              <div className='mt-6'>
                <EventsList
                  events={upcomingEvents}
                  emptyMessage='There are no events scheduled.'
                />
              </div>
            </div>
          ) : (
            <div className='mt-8'>
              <EventsCalendar events={events} />
            </div>
          )}
        </div>
      </FadeIn>
    </>
  )
}

export default Events