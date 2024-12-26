import React from 'react'
import SecondaryButton from '../Button/SecondaryButton'
import CancelButton from '../Button/CancelButton'

interface RequestCodeModalProps{
  className?: string;
  onClose: () => void;
}
const RequestCodeModal: React.FC<RequestCodeModalProps> = ({ className, onClose }) => {
  return (
    <div className={`w-[400px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-white rounded-xl z-40 shadow-only-left ${className}`}>
        <p className='mt-3 text-red-600 hidden'>We can't find an email that matches this username. Please check again !</p>
        <div className='mt-3'>
            <label className='text-base'>Enter your username</label>
            <input className='w-full border border-black rounded focus:outline-color-1 p-1 mt-1' type="text" />
        </div>
        <div className='mt-3 text-center'>
            <CancelButton onClick={onClose} className='w-1/3 me-2'>Close</CancelButton>
            <SecondaryButton type='button' className='hover:bg-color-1'>Send code</SecondaryButton>
        </div>
    </div>
  )
}

export default RequestCodeModal
