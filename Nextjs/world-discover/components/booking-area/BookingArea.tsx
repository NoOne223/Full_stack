import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookingArea = () => {
  return (
    <div className='grid grid-cols-3 mt-5'>
      <Link href='' className='min-h-[150px]'>
        <button className='border border-gray-500 rounded-lg w-full h-full relative'>
            <Image className='w-10 absolute top-3 right-32' src='/images/plane.svg' width={500} height={500} alt='plane icon'/>
            <Image className='w-24 absolute bottom-0 left-0' src='/images/city.svg' width={500} height={500} alt='plane icon'/>
            <Image className='w-24 absolute bottom-0 right-0' src='/images/building.svg' width={500} height={500} alt='plane icon'/>
        </button>
      </Link>
    </div>
  )
}

export default BookingArea
