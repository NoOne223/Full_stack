import Link from 'next/link'
import React from 'react'
import './bookingarea.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faNewspaper, faPlaneUp, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons'

const BookingArea = () => {
  return (
    <div className='background min-h-[100vh] content-center'>
     <div className='container mx-auto p-3'>
      <div className='flex items-center gap-x-5'>
        <div className='w-1/2'>
          <h2 className="text-white text-6xl font-bold mb-5">This is title</h2>
          <p className='text-white text-4xl font-bold'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel illo quos consequuntur qui dolores quas non commodi reprehenderit corrupti nesciunt ipsam ut quidem, doloremque adipisci? Ducimus et doloribus architecto reprehenderit?
          </p>
        </div>
        <div className='w-1/2 grid grid-cols-2 gap-6'>
          <Link href='/flight' className='min-h-[300px]'>
            <div 
            className='bg-white rounded-xl shadow-xl text-center text-gray-400 h-full flex flex-col justify-center scale-100 transition-all duration-300 ease-in-out
            hover:bg-primary-color hover:text-white hover:scale-105'>
              <FontAwesomeIcon className='text-8xl mb-3' icon={faPlaneUp} />
              <p className='text-4xl font-bold'>Flight Booking</p>
            </div>
          </Link>
          <Link href='/' className='min-h-[300px]'>
            <div 
            className='bg-white rounded-xl shadow-xl text-center text-gray-400 h-full flex flex-col justify-center scale-100 transition-all duration-300 ease-in-out
            hover:bg-primary-color hover:text-white hover:scale-105'>
              <FontAwesomeIcon className='text-8xl mb-3' icon={faHotel} />
              <p className='text-4xl font-bold'>Hotel Booking</p>
            </div>
          </Link>
          <Link href='/' className='min-h-[300px]'>
            <div 
            className='bg-white rounded-xl shadow-xl text-center text-gray-400 h-full flex flex-col justify-center scale-100 transition-all duration-300 ease-in-out
            hover:bg-primary-color hover:text-white hover:scale-105'>
              <FontAwesomeIcon className='text-8xl mb-3' icon={faTemperatureHalf} />
              <p className='text-4xl font-bold'>Weather check</p>
            </div>
          </Link>
          <Link href='/' className='min-h-[300px]'>
            <div 
            className='bg-white rounded-xl shadow-xl text-center text-gray-400 h-full flex flex-col justify-center scale-100 transition-all duration-300 ease-in-out
            hover:bg-primary-color hover:text-white hover:scale-105'>
              <FontAwesomeIcon className='text-8xl mb-3' icon={faNewspaper} />
              <p className='text-4xl font-bold'>News</p>
            </div>
          </Link>
        </div>
      </div>
     </div>
    </div>
  )
}

export default BookingArea
