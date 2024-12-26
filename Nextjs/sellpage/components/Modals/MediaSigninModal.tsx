import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import SecondaryButton from '../Button/SecondaryButton'

const MediaSigninModal = () => {
  return (
    <div className='max-w-[400px] w-full h-fit bg-white shadow-only-left rounded-xl p-5'>
        <h2 className='text-4xl font-extrabold text-center'>Or you can</h2>
        <SecondaryButton type='button' className='flex items-center gap-x-3 w-full hover:bg-color-1 normal-case justify-center mt-3'>
            <Image className='h-5 object-contain w-fit' src='/images/google.png' width={500} height={500} alt='Media logo'/>
            <span>Sign in with Google account</span>
        </SecondaryButton>
        <SecondaryButton type='button' className='flex items-center gap-x-3 w-full hover:bg-color-1 normal-case justify-center mt-3'>
            <FontAwesomeIcon icon={faSquareFacebook} />
            <span>Sign in with Facebook account</span>
        </SecondaryButton>
    </div>
  )
}

export default MediaSigninModal