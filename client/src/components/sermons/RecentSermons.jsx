import React, { useEffect, useState } from 'react'
import FadeIn from '../common/FadeIn'
import { loadYoutubeVideo } from '../../services/youtubeService'

const formatDate = (isoDate) => {
  if (!isoDate) return 'Unknown date'

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(isoDate))
}

const RecentSermons = () => {
  const [sermons, setSermons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchRecentSermons() {
      const items = await loadYoutubeVideo(setLoading, setError, 9)

      if (!items || !items.length) {
        return
      }

      const mappedSermons = items
        .filter((item) => item?.snippet?.resourceId?.videoId)
        .map((item) => {
          const videoId = item.snippet.resourceId.videoId

          return {
            id: videoId,
            title: item.snippet.title,
            publishedAt: item.snippet.publishedAt,
            thumbnail:
              item.snippet.thumbnails?.high?.url ||
              item.snippet.thumbnails?.medium?.url ||
              item.snippet.thumbnails?.default?.url,
            url: `https://www.youtube.com/watch?v=${videoId}`,
          }
        })

      setSermons(mappedSermons)
    }

    fetchRecentSermons()
  }, [])

  return (
    <FadeIn className='section-padding'>
      <div className='content-container'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='section-heading primary-text'>Recent sermons</h2>
          <a
            href='https://www.youtube.com/@220ForLife'
            target='_blank'
            rel='noreferrer'
            className='btn-secondary mt-6'
          >
            Sermon archive
          </a>
        </div>

        {loading && <p className='section-body text-center'>Loading sermons...</p>}

        {error && !loading && (
          <p className='section-body text-center text-red-600'>{error}</p>
        )}

        {!loading && !error && (
          <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {sermons.map((sermon) => (
              <a
                key={sermon.id}
                href={sermon.url}
                target='_blank'
                rel='noreferrer'
                className='flex h-full flex-col overflow-hidden border border-[#dbe6ef] bg-white transition-transform duration-200 hover:-translate-y-1 rounded-2xl'
              >
                <div className='aspect-video w-full bg-slate-100'>
                  <img
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className='h-full w-full object-cover'
                    loading='lazy'
                  />
                </div>

                <div className='flex flex-1 flex-col p-5'>
                  <h3 className='header-font text-lg text-[#10263b] line-clamp-2'>
                    {sermon.title}
                  </h3>
                  <p className='mt-3 body-font text-sm text-slate-600'>
                    {formatDate(sermon.publishedAt)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </FadeIn>
  )
}

export default RecentSermons