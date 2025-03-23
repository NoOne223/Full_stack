'use client'
import React from 'react'
import { useModal } from '../modals/ModalContext';

interface CloseModalProps {
    className: string;
    children: React.ReactNode;
}
const CloseModal:React.FC<CloseModalProps> = ( {className, children} ) => {
  const { closeModal } = useModal();

  return (
    <button 
    onClick={closeModal}
    className={`font-semibold cursor-pointer text-gray-400 ${className}`}>
        {children}
    </button>
  )
}

export default CloseModal