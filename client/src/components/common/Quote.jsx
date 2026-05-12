import React from 'react'

const Quote = ({ quote, reference }) => {
  return (
    <figure className="flex flex-col gap-4 border-l-4 border-[#2c6598] pl-6">
      <blockquote className="italic text-lg leading-relaxed">
        {quote}
      </blockquote>
      <figcaption className="font-bold text-sm text-gray-700">— {reference}</figcaption>
    </figure>
  )
}

export default Quote