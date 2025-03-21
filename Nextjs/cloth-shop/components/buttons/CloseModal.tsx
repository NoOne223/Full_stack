'use client'
import React, { useState } from 'react'
import { useModal } from '../modals/ModalContext';

interface CloseModalProps {
    className: string;
    children: React.ReactNode;
}
const CloseModal:React.FC<CloseModalProps> = ( {className, children} ) => {
  const { closeModal } = useModal();
  const [,setFadeClass] = useState('');
  
  const handleClose = () => {
    setFadeClass('fade-out');
    setTimeout(() => closeModal(), 300);
  };

  return (
    <button 
    onClick={closeModal}
    className={`font-semibold cursor-pointer text-gray-400 ${className}`}>
        {children}
    </button>
  )
}

export default CloseModal