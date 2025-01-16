import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faHotel, faNewspaper, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const BookingArea = () => {
  return (
    <>
      <div className='grid grid-cols-4 gap-4 mt-5'>
        <Link href='/flight'>
          <button 
          className='border py-5 shadow-md rounded-lg w-full h-full bg-white text-gray-400 scale-100 transition-all ease-in-out duration-300
          hover:scale-105 hover:text-white hover:bg-gradient-to-t from-violet-400 to-fuchsia-400
          '>
            <FontAwesomeIcon className='text-6xl mb-3' icon={faPlaneDeparture} />
            <p className='text-4xl font-bold'>Flight Booking</p>
          </button>
        </Link>
        <Link href='' className='min-h-[150px]'>
          <button 
          className='border py-5 shadow-md rounded-lg w-full h-full bg-white text-gray-400 scale-100 transition-all ease-in-out duration-300
          hover:scale-105 hover:text-white hover:bg-gradient-to-t from-blue-600 to-blue-400
          '>
            <FontAwesomeIcon className='text-6xl mb-3'  icon={faHotel} />
            <p className='text-4xl font-bold'>Hotel Booking</p>
          </button>
        </Link>
        <Link href='' className='min-h-[150px]'>
          <button 
          className='border py-5 shadow-md rounded-lg w-full h-full bg-white text-gray-400 scale-100 transition-all ease-in-out duration-300
          hover:scale-105 hover:text-white hover:bg-gradient-to-t from-green-400 to-green-300
          '>
            <FontAwesomeIcon className='text-6xl mb-3'  icon={faCloud} />
            <p className='text-4xl font-bold'>Weather</p>
          </button>
        </Link>
        <Link href='' className='min-h-[150px]'>
          <button 
          className='border py-5 shadow-md rounded-lg w-full h-full bg-white text-gray-400 scale-100 transition-all ease-in-out duration-300
          hover:scale-105 hover:text-white hover:bg-gradient-to-t from-red-400 to-orange-400
          '>
            <FontAwesomeIcon className='text-6xl mb-3'  icon={faNewspaper} />
            <p className='text-4xl font-bold'>News</p>
          </button>
        </Link>
      </div>
    </>
  )
}

export default BookingArea
