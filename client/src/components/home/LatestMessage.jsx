import React, { useEffect, useState } from 'react'
import FadeIn from "../common/FadeIn"
import { loadYoutubeVideos } from '../../services/youtubeService';
import YouTubeVideo from '../common/YouTubeVideo';

const LatestMessage = () => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const channelUrl = 'https://www.youtube.com/@220ForLife';

  useEffect(() => {
    async function fetchLatestVideo() {
      const items = await loadYoutubeVideos(setLoading, setError, 1);
      if (!items || !items.length) {
        return;
      }

      const latest = items[0];
      setVideo({
        id: latest.snippet.resourceId.videoId,
        title: latest.snippet.title,
        description: latest.snippet.description
      });
    }

    fetchLatestVideo();
  }, [])

  if (loading) {
    return (
      <section className='section-padding'>
        <div className='content-container'>
          <div className='mx-auto flex w-full max-w-4xl flex-col items-center'>
            <h2 className='section-heading primary-text'>Latest Message</h2>
            <p className='mt-3 body-font text-sm text-slate-600'>Loading latest video...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !video) {
    return (
      <FadeIn className='section-padding'>
        <div className='content-container'>
          <div className='mx-auto flex w-full max-w-4xl flex-col items-center'>
            <h2 className='section-heading primary-text'>Latest Message</h2>
            <a href={channelUrl} target='_blank' rel='noreferrer' className='btn-primary mt-5'>
              View Channel
            </a>
          </div>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn className='section-padding'>
      <div className='content-container'>
        <div className='mx-auto flex w-full max-w-4xl flex-col items-center'>
          <h2 className='section-heading primary-text'>Latest Message</h2>

          <YouTubeVideo video={video} />

          <a href={channelUrl} target='_blank' rel='noreferrer' className='btn-primary mt-5'>
            See More
          </a>
        </div>
      </div>
    </FadeIn>
  )
}

export default LatestMessage