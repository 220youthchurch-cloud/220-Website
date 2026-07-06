import React from 'react'
import CarouselPackage from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Carousel = CarouselPackage.default || CarouselPackage


const responsive = {
  fullScreen: {
    breakpoint: { max: 9999, min: 0 },
    items: 1,
  },
}

const RoleImages = ({ role, onClose }) => {
  if (!role) {
    return null
  }

  const images = role.gallery?.length
    ? role.gallery.map((file) => `${role.imagesPath}/${file}`)
    : [`${role.imagesPath}/header.jpg`]

  return (
    <div
      className='fixed inset-0 z-90 bg-black/50 backdrop-blur-sm'
      onClick={onClose}
      role='presentation'
    >
      <div className='flex h-full w-full items-center justify-center p-4 md:p-8'>
        <div
          className='relative w-full max-w-6xl'
          onClick={(event) => event.stopPropagation()}
          role='presentation'
        >
          <div className='mb-6 flex justify-end'>
            <button
              type='button'
              onClick={onClose}
              aria-label={`Close ${role.title} images`}
              className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c5d8e8] bg-white text-[#10263b] transition-colors duration-200 hover:bg-[#e8eff6]'
            >
              ×
            </button>
          </div>


          <Carousel
            responsive={responsive}
            infinite
            showDots
            keyBoardControl
            swipeable
            draggable
            arrows
            containerClass='w-full'
            itemClass='px-0'
            dotListClass='pb-4'
          >
            {images.map((src, index) => (
              <div key={src} className='flex h-[80vh] items-center justify-center px-4 py-10'>
                <img
                  src={src}
                  alt={`${role.title} slide ${index + 1}`}
                  className='max-h-full max-w-full rounded-2xl object-contain'
                  loading='eager'
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default RoleImages