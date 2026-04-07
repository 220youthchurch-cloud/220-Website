import React, { useEffect, useState } from 'react'
import { loadLatestVideo } from '../../services/youtubeService';

const LatestYouTubeVideo = () => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadLatestVideo(setVideo, setLoading, setError);
  }, [])


  if (loading) return <section className='section-padding'><p>Loading latest video...</p></section>;
  if (error) return <section className='section-padding'><p>{error}</p></section>;
  if (!video) return null;

  return (
    <section className='section-padding'>
      <div className='content-container'>
        <div className='mx-auto flex w-full max-w-4xl flex-col items-center'>
          <h2 className='section-heading primary-text'>Latest Message</h2>

          <div className='mt-6 aspect-video w-full overflow-hidden rounded-2xl shadow-lg'>
            <iframe
              className='h-full w-full'
              src={'https://www.youtube-nocookie.com/embed/' + video.id + '?rel=0'}
              title={video.title}
              loading='lazy'
              allowFullScreen
            />
          </div>

          <a href='https://www.youtube.com/@220ForLife' target='_blank' rel='noreferrer' className='btn-primary mt-5'>
            See More
          </a>
        </div>
      </div>
    </section>
  )
}

export default LatestYouTubeVideo