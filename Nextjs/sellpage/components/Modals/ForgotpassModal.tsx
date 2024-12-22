import React from 'react'
import SecondaryButton from '../Button/SecondaryButton'

const ForgotpassModal = () => {
  return (
    <div className='w-[900px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-white rounded-xl z-40 shadow-only-left'>
      <div className='flex gap-x-5 mb-3'>
        <input type='number'></input>
        <input type='number'></input>
        <input type='number'></input>
        <input type='number'></input>
        <input type='number'></input>
        <input type='number'></input>
      </div>
      <SecondaryButton className='w-full hover:bg-color-1'>Confirm</SecondaryButton>
    </div>
  )
}

export default ForgotpassModal
