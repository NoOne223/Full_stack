'use client'
import React from 'react'
import { useModal } from './ModalContext';
import Image from 'next/image';
import CloseModal from '../buttons/CloseModal';

interface ModalProps {
  modalId: string;
}


const AccountModal = ({ modalId }: ModalProps) => {
   const { activeModal,  fadeClass } = useModal();
    
    if (activeModal !== modalId) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40'>
      <div className={`bg-white p-5 max-w-[400px] w-full h-fit absolute top-0 left-0 right-0 bottom-0 m-auto rounded-xl ${fadeClass}`}>
        <div>
          <Image className='mx-auto' src='/images/profile.png' width={100} height={100} alt='User avt'/>
          <input className='font-bold text-2xl text-center mt-2 w-full focus:outline-0 focus:border-b pb-1' value={`User name`} disabled></input>
        </div>
        <p>Point: 100pts</p>
        <CloseModal className='px-5 py-2 w-full mt-2 hover:bg-gray-300 hover:text-gray-700 rounded-sm'>Đóng</CloseModal>
      </div> 
    </div>
  )
}

export default AccountModal