import React, { useEffect, useState } from 'react'
import FadeIn from "../common/FadeIn"
import { loadYoutubeVideo } from '../../services/youtubeService';
import YouTubeVideo from '../common/YouTubeVideo';

const LatestMessage = () => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchLatestVideo() {
      const items = await loadYoutubeVideo(setLoading, setError, 1);
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

  if (loading) return <section className='section-padding'><p>Loading latest video...</p></section>;
  if (error) return <section className='section-padding'><p>{error}</p></section>;
  if (!video) return null;

  return (
    <FadeIn className='section-padding'>
      <div className='content-container'>
        <div className='mx-auto flex w-full max-w-4xl flex-col items-center'>
          <h2 className='section-heading primary-text'>Latest Message</h2>

          <YouTubeVideo video={video} />

          <a href='https://www.youtube.com/@220ForLife' target='_blank' rel='noreferrer' className='btn-primary mt-5'>
            See More
          </a>
        </div>
      </div>
    </FadeIn>
  )
}

export default LatestMessage