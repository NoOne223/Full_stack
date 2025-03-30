'use client'
import React from 'react'
import { useModal } from '../modals/ModalContext';

interface ModalButtonProps {
  className: string;
  children: React.ReactNode;
  modalId: string;
}

const ModalButton:React.FC<ModalButtonProps> = ( {className, children, modalId} ) => {
  const { openModal } = useModal();
  
  return (
    <button 
    onClick={() => openModal(modalId)} 
    type='button' className={`cursor-pointer border py-2 px-4 w-full hover:bg-thirdary hover:border-transparent ${className}`}
    >
      {children}
    </button>
  )
}

export default ModalButton
