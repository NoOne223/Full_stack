import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ModalButton from '../buttons/ModalButton'

const Header = () => {
  const [activeModal, setActiveModal] = useState<ModalName>(null);
  
    const openModal = (modalName: ModalName): void => {
      setActiveModal(modalName);
    };
  
    const closeModal = (): void => {
      setActiveModal(null);
    };
    
  return (
    <div>
        <div className='container mx-auto p-3'>
          <Link href='/'><Image className='w-fit h-16 object-contain' src='/images/pagelogo.png' width={500} height={500} alt='Logo'/></Link>
          <ModalButton onClick={() => openModal('modal1')}>Open modal</ModalButton>
        </div>
    </div>
  )
}

export default Header