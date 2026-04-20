import React, { useMemo, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import { getEventsForDate, isEventOnDate } from '../../data/events'
import EventsList from './EventsList'

const EventsCalendar = ({ events = [] }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [activeStartDate, setActiveStartDate] = useState(new Date())

  const selectedDateEvents = useMemo(
    () => getEventsForDate(selectedDate, events),
    [selectedDate, events],
  )

  const handleDateChange = (value) => {
    if (value instanceof Date) {
      setSelectedDate(value)
      setActiveStartDate(value)
      return
    }

    if (Array.isArray(value) && value[0] instanceof Date) {
      setSelectedDate(value[0])
      setActiveStartDate(value[0])
    }
  }

  const handleActiveStartDateChange = ({ activeStartDate: nextActiveStartDate }) => {
    if (nextActiveStartDate) {
      setActiveStartDate(nextActiveStartDate)
    }
  }

  const handleGoToToday = () => {
    const today = new Date()
    setSelectedDate(today)
    setActiveStartDate(today)
  }

  const hasEventsOnDate = (date) =>
    events.some((event) => isEventOnDate(event, date))

  return (
    <div className='space-y-8'>
      <div className='rounded-2xl border border-[#dbe6ef] bg-white p-4 shadow-sm md:p-6 w-full'>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          activeStartDate={activeStartDate}
          onActiveStartDateChange={handleActiveStartDateChange}
          minDetail='month'
          className='events-calendar mx-auto w-full! border-none! body-font!'
          tileClassName={({ date, view }) =>
            view === 'month' && hasEventsOnDate(date) ? 'events-calendar-has-event' : null
          }
          tileContent={({ date, view }) =>
            view === 'month' && hasEventsOnDate(date) ? (
              <span className='events-calendar-dot' aria-hidden='true' />
            ) : null
          }
        />
      </div>

      <div>
        <h3 className='header-font text-2xl text-[#10263b]'>
          Events on{' '}
          {selectedDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </h3>

        <div className='mt-5'>
          <EventsList
            events={selectedDateEvents}
            emptyMessage='There are no events scheduled for this day.'
          />
        </div>
      </div>
    </div>
  )
}

export default EventsCalendar