import React from 'react'
import './modal.css'
import PasswordInput from '../ControlPass/PasswordInput'
import SecondaryButton from '../Button/SecondaryButton'

interface ChangepassModalProps{
  className?: string;
}
const ChangepassModal: React.FC<ChangepassModalProps> = ({ className }) => {
  return (
    <div className={`w-[500px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-white rounded-xl z-40 shadow-only-left ${className}`}>
      <h2 className='text-4xl font-extrabold text-center'>Change Password</h2>
      <p className='mt-3 text-red-600 hidden'>The Cofirm Password is not match Password !</p>
      <div className='mt-3'>
        <label className='text-base'>New Password</label>
        <PasswordInput />
      </div>
      <div className='mt-3'>
        <label className='text-base'>Confirm new Password</label>
        <PasswordInput />
      </div>
      <SecondaryButton type='submit' className='hover:bg-color-1 w-full mt-3'>Confirm</SecondaryButton>
    </div>
  )
}

export default ChangepassModal