import React from 'react'

const YouTubeVideo = ({ video }) => {
  return (
    <div className='mt-6 aspect-video w-full overflow-hidden rounded-2xl shadow-lg'>
      <iframe
        className='h-full w-full'
        src={'https://www.youtube-nocookie.com/embed/' + video.id + '?rel=0'}
        title={video.title}
        loading='lazy'
        allowFullScreen
      />
    </div>
  )
}

export default YouTubeVideo