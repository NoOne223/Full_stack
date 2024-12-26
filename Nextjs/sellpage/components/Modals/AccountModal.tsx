import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SecondaryButton from '../Button/SecondaryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const AccountModal = () => {
  return (
    <div className='max-w-[400px] w-full bg-white shadow-only-left rounded-xl p-5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40'>
      <Image className='h-40 object-contain shadow-bottom rounded-full w-fit mx-auto' src='/images/boy.png' width={500} height={500} alt='Account avatar'/>
      <div className='mt-3 flex items-center justify-center'>
        <h2 className='text-4xl font-extrabold'>Account Name</h2>
        <FontAwesomeIcon className='ms-2 hover:text-color-2 cursor-pointer' title='edit name' icon={faPencil} />
      </div>
      <ul className='mt-3'>
        <li className='py-1'>
            <p>
                <strong>Email : </strong>
                namle392001@gmail.com
            </p>
        </li>
        <li className='py-1'>
            <p>
                <strong>Phone : </strong>
                0982582754
            </p>
        </li>
        <li className='py-1'>
            <p>
                <strong>Birthday : </strong>
                03-09-01
            </p>
        </li>
        <li className='py-1'>
            <p>
                <strong>Gender : </strong>
                Male
            </p>
        </li>
        <li className='py-1'>
            <p>
                <strong>Kind of member : </strong>
                Regular
            </p>
        </li>
        <li className='py-1'>
            <p>
                <strong>Points : </strong>
                1,000
            </p>
        </li>
      </ul>
      <Link href='/accountpage'><SecondaryButton type='button' className='hover:bg-color-1 w-full mt-3'>Sign out</SecondaryButton></Link>
    </div>
  )
}

export default AccountModal