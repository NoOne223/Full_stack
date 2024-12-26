import React from 'react'
import SecondaryButton from '../Button/SecondaryButton'

interface ForgotpassModalProps{
  className?: string;
}
const ForgotpassModal: React.FC<ForgotpassModalProps> = ({ className }) => {
  return (
    <div className={`w-[500px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-white rounded-xl z-40 shadow-only-left ${className}`}>
      <div className='flex gap-x-5 justify-center'>
        <input className='border border-black rounded w-10 h-10 text-center focus:outline-color-1' type='text'></input>
        <input className='border border-black rounded w-10 h-10 text-center focus:outline-color-1' type='text'></input>
        <input className='border border-black rounded w-10 h-10 text-center focus:outline-color-1' type='text'></input>
        <input className='border border-black rounded w-10 h-10 text-center focus:outline-color-1' type='text'></input>
        <input className='border border-black rounded w-10 h-10 text-center focus:outline-color-1' type='text'></input>
        <input className='border border-black rounded w-10 h-10 text-center focus:outline-color-1' type='text'></input>
      </div>
      <div className='mt-3'>
        <p>We have sent a code to your <span>email</span>. The code will expire in <span className='font-extrabold text-color-2'>60</span> seconds.</p>
      </div>
      <div className='mt-3 text-center'>
        <SecondaryButton type='button' className='w-full hover:bg-color-1'>Confirm</SecondaryButton>
      </div>
    </div>
  )
}

export default ForgotpassModal
