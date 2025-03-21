'use client'
import React from 'react'
import { useModal } from '../modals/ModalContext';

interface ModalButtonProps {
  className: string;
  children: string;
  modalId: string;
}

const ModalButton:React.FC<ModalButtonProps> = ( {className, children, modalId} ) => {
  const { openModal } = useModal();
  
  return (
    <button 
    onClick={() => openModal(modalId)} 
    type='button' className={`cursor-pointer border border-white rounded-full py-2 px-4 max-w-3xs w-full hover:bg-thirdary hover:border-transparent ${className}`}
    >
      {children}
    </button>
  )
}

export default ModalButton
