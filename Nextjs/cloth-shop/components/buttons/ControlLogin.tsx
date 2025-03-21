import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ControlLogin = () => {
  return (
    <div className='flex gap-x-2'>
        <button className='bg-[#4267B2] shadow shadow-black/50 text-white px-5 py-2 rounded-sm w-1/2 cursor-pointer'>
            <FontAwesomeIcon icon={faFacebookF} />
            <span className='font-semibold ms-3'>Facebook</span>
        </button>
        <button className='shadow shadow-black/50 px-5 py-2 rounded-sm w-1/2 cursor-pointer'>
            <FontAwesomeIcon icon={faGoogle} />
            <span className='font-semibold ms-3'>Google</span>
        </button>
    </div>
  )
}

export default ControlLogin