import React from 'react'
import { FaRegClock, FaClock } from "react-icons/fa";
const Servicetime = () => {
  return (
    <section className='py-10 section-padding bg-white'>
      <div className='flex flex-col items-center'>
        <FaRegClock size={30} />
        <div className='header-font text-[2.5rem] text-center font-extrabold gap-6'>
          <h3>Join us Every Sunday</h3>
          <h3>10:30a & 12:30a</h3>
          <a href='https://maps.app.goo.gl/17oLXgmbpW4BTJgB9' target='_blank' rel='noreferrer' className='btn-secondary mt-5'>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}

export default Servicetime