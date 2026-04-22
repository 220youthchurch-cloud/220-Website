import React, { useEffect, useMemo, useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const formatDateLabel = (event) => {
  if (!event) return ''
  return event.recurring ? `Every ${event.date}` : event.date
}

const formatTimeLabel = (event) => {
  if (event.startTime && event.endTime) {
    return `${event.startTime} - ${event.endTime}`
  }

  if (event.startTime) {
    return event.startTime
  }

  return 'Time TBD'
}

// Resolves the media path for an event, handling both absolute URLs and relative paths
const resolveMediaPath = (path) => {
  if (!path) {
    return ''
  }

  if (/^https?:\/\//i.test(path)) { // Absolute URL
    return path
  }

  if (path.startsWith('/events/') || path.startsWith('/misc/')) {
    return path
  }

  if (path.startsWith('/')) {
    return `/events${path}`
  }

  return `/events/${path}`
}

const EventScreen = ({ event, onClose }) => {
  const resolvedMediaPath = useMemo(() => resolveMediaPath(event?.mediaPath), [event?.mediaPath])
  const [imageSrc, setImageSrc] = useState(resolvedMediaPath)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  useEffect(() => {
    setImageSrc(resolvedMediaPath)
  }, [resolvedMediaPath])

  if (!event) {
    return null
  }

  const mapsLink = `https://maps.google.com?q=${encodeURIComponent(event.location || '')}`
  const detailsMarkup = event.detailedDescription || `<p>${event.description || ''}</p>`

  return (
    <div className='fixed inset-0 z-90 overflow-y-auto bg-[#f8fbfe]'>
      <div className='content-container py-8 md:py-12'>
        <div className='mb-6 flex justify-end'>
          <button
            type='button'
            onClick={onClose}
            className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c5d8e8] bg-white text-[#10263b] transition-colors duration-200 hover:bg-[#e8eff6]'
            aria-label='Close event details'
          >
            <FaTimes />
          </button>
        </div>

        <section className='rounded-3xl bg-white p-6 shadow-sm md:p-10'>
          <div className='flex flex-col gap-8 md:flex-row-reverse md:items-center'>
            <div className='md:w-[46%]'>
              {event.isVideo ? (
                <div className='aspect-video overflow-hidden rounded-2xl bg-slate-200'>
                  <video
                    className='h-full w-full object-cover'
                    src={resolvedMediaPath}
                    controls
                    playsInline
                  />
                </div>
              ) : (
                <img
                  className='w-full rounded-2xl object-cover'
                  src={imageSrc}
                  alt={event.title}
                  onError={() => {
                    if (imageSrc.endsWith('.png')) {
                      setImageSrc(imageSrc.replace(/\.png$/i, '.jpg'))
                    }
                  }}
                />
              )}
            </div>

            <div className='md:w-[54%] md:pr-8'>
              <h1 className='header-font text-4xl leading-tight text-[#10263b] md:text-5xl'>
                {event.title}
              </h1>
              <p className='body-font mt-4 text-lg text-slate-700'>{formatDateLabel(event)}</p>
              <p className='body-font mt-2 text-slate-700'>{formatTimeLabel(event)}</p>
            </div>
          </div>

          <div className='mt-10 grid gap-10 md:grid-cols-3'>
            <aside className='space-y-8 md:col-span-1'>
              <div>
                <h2 className='header-font text-sm uppercase tracking-[0.12em] text-[#2c6598]'>
                  Past Dates
                </h2>
                <ul className='body-font mt-3 space-y-2 text-slate-700'>
                  <li>{formatDateLabel(event)}</li>
                </ul>
              </div>

              <div>
                <h2 className='header-font text-sm uppercase tracking-[0.12em] text-[#2c6598]'>
                  Location
                </h2>
                <p className='body-font mt-3 whitespace-pre-wrap text-slate-700'>
                  {event.location || 'Location TBD'}
                </p>
                {event.location && (
                  <div className='mt-4 flex flex-wrap gap-3'>
                    <a
                      href={mapsLink}
                      target='_blank'
                      rel='noreferrer'
                      className='btn-secondary'
                    >
                      Get Directions
                    </a>
                  </div>
                )}
              </div>
            </aside>

            <section className='md:col-span-2'>
              <h2 className='header-font text-3xl text-[#10263b]'>Details</h2>
              <div
                className='mt-4 body-font leading-8 text-slate-700 [&_h1]:header-font [&_h1]:mb-4 [&_h1]:text-2xl [&_h1]:text-[#10263b] [&_p]:mb-4'
                dangerouslySetInnerHTML={{ __html: detailsMarkup }}
              />
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EventScreen